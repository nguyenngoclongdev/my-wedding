// src/components/bottom-bar/BottomBar.jsx
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CalendarHeart,
  Gift,
  Home,
  MapPin,
  MessageCircleHeart,
} from "lucide-react";
import React from "react";

const menuItems = [
  { icon: Home, label: "Home", href: "#home", section: "home" },
  { icon: CalendarHeart, label: "Event", href: "#event", section: "event" },
  { icon: MapPin, label: "Location", href: "#location", section: "location" },
  { icon: Gift, label: "Gift", href: "#gifts", section: "gifts" },
  { icon: MessageCircleHeart, label: "Gallery", href: "#gallery", section: "gallery" },
];

const BottomBar = ({ activeSection, onNavigate }) => {
  return (
    <motion.div
      className="fixed bottom-4 transform -translate-x-1/2 z-50 w-full px-4 max-w-[430px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-4 py-2">
        <nav className="flex justify-between items-center">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-50/80",
                activeSection === item.section
                  ? "text-primary bg-primary/5"
                  : "text-gray-600"
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(item.section)}
            >
              <item.icon
                className={cn(
                  "h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200",
                  activeSection === item.section ? "stroke-rose-500" : "stroke-gray-600"
                )}
              />
              <span
                className={cn(
                  "text-[10px] sm:text-xs font-medium transition-all duration-200 line-clamp-1",
                  activeSection === item.section
                    ? "scale-105 text-rose-500"
                    : "scale-100"
                )}
              >
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default BottomBar;
