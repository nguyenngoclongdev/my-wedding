// EventCard.jsx
import { formatEventDate } from "@/lib/formatEventDate";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple,
  Calendar,
  Calendar as CalendarIcon,
  CalendarPlus,
  Chrome,
  Clock,
  MapPin,
  X,
} from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../analytics"; // thêm dòng này

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm"
          >
            <div className="bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl border border-gray-100">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CalendarButton = ({ icon: Icon, label, onClick, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="w-5 h-5" />
    <span className="text-gray-700 font-medium">{label}</span>
  </motion.button>
);

const SingleEventCard = ({ eventData, isDone }) => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const googleCalendarLink = () => {
    const startDate = new Date(`${eventData.date}T${eventData.startTime}:00`);
    const endDate = new Date(`${eventData.date}T${eventData.endTime}:00`);

    const formatDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "");
    };

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(eventData.description)}&location=${encodeURIComponent(eventData.location)}&ctz=${eventData.timeZone}`;
  };

  const generateICSContent = () => {
    const startDate = new Date(`${eventData.date}T${eventData.startTime}:00`);
    const endDate = new Date(`${eventData.date}T${eventData.endTime}:00`);

    const formatICSDate = (date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${eventData.title}
DESCRIPTION:${eventData.description}
LOCATION:${eventData.location}
END:VEVENT
END:VCALENDAR`;
  };

  const downloadICSFile = () => {
    const icsContent = generateICSContent();
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${eventData.title.toLowerCase().replace(/ /g, "-")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {eventData.title.split(" - ")[0]}
          </h3>
          {/* Show badge if event is done, else show add-to-calendar button */}
          {isDone ? (
            <span className="bg-rose-200 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
              Đã diễn ra
            </span>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-rose-500 hover:text-rose-600 transition-colors"
              onClick={() => setShowCalendarModal(true)}
            >
              <CalendarPlus className="w-5 h-5" />
            </motion.button>
          )}
        </div>
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-rose-500" />
            <span>{formatEventDate(eventData.date)}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-rose-500" />
            <span>
              {eventData.startTime} - {eventData.endTime}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span>{eventData.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Hide calendar modal if event is done */}
      {!isDone && (
        <Modal
          isOpen={showCalendarModal}
          onClose={() => setShowCalendarModal(false)}
        >
          <div className="space-y-6 ">
            <div className="flex justify-between  items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Thêm vào Lịch nè!
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCalendarModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="space-y-3">
              <CalendarButton
                icon={(props) => (
                  <Chrome {...props} className="w-5 h-5 text-rose-500" />
                )}
                label="Lịch Google"
                onClick={() => {
                  window.open(googleCalendarLink(), "_blank");
                  trackEvent("calendar_add_google", { event: eventData.title });
                }}
              />

              <CalendarButton
                icon={(props) => (
                  <Apple {...props} className="w-5 h-5 text-gray-900" />
                )}
                label="Lịch Apple"
                onClick={() => {
                  downloadICSFile();
                  trackEvent("calendar_add_apple", { event: eventData.title });
                }}
              />

              <CalendarButton
                icon={(props) => (
                  <CalendarIcon {...props} className="w-5 h-5 text-blue-600" />
                )}
                label="Lịch Outlook"
                onClick={() => {
                  downloadICSFile();
                  trackEvent("calendar_add_outlook", { event: eventData.title });
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Main EventCards component that handles multiple events
export default function EventCards({ events, doneEvents = [] }) {
  return (
    <div className="grid gap-8">
      {events.map((event) => {
        const isDone = doneEvents.includes(event.id || event.title?.toLowerCase());
        return (
          <div key={event.id || event.title} className="relative">
            <SingleEventCard eventData={event} isDone={isDone} />
          </div>
        );
      })}
    </div>
  );
}
