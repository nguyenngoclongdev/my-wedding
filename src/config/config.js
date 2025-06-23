// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Tâm ♥ Long | Wedding Invitation",
    description: "Mình cưới nhau rồi nè, đến chung vui với tụi mình nha!",
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "Long",
    brideName: "Tâm",
  },

  // Event Details
  event: {
    date: "2025-07-13",
    time: "11:00",
    timeZone: "Hanoi/Jakarta",
    dateTime: "2025-07-13T04:00:00Z", // ISO 8601 format
    name: "Hương Cau Garden",
    address: "164 Nguyễn Tất Thành, Ea Kar, Đắk Lắk",
    phone: "0357 042 929",
    maps_url: "https://maps.app.goo.gl/RCzf9xgcsJpHvbW18",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.499537534723!2d108.45266529999999!3d12.810964099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171de47688b65d7%3A0x1317ed2dcf2fad38!2zSMawxqFuZyBDYXUgR2FyZGVu!5e0!3m2!1svi!2s!4v1750638276861!5m2!1svi!2s",
    maps_navigation:
      "https://www.google.com/maps/dir/?api=1&destination=Hương+Cau+Garden,+164+Nguyễn+Tất+Thành,+Ea+Kar,+Đắk+Lắk",
    latitude: 12.8109641, // Replace with actual coordinates
    longitude: 108.4500904, // Replace with actual coordinates
  },

  eventDetails: [
    {
      id: "hcm",
      title: "Tại Hồ Chí Minh",
      date: "2025-06-22",
      startTime: "11:00",
      endTime: "14:30",
      timeZone: "Hanoi/Jakarta",
      location: "Queen Hall, Queen Plaza",
    },
    {
      id: "daklak",
      title: "Tại Đắk Lắk",
      date: "2025-07-13",
      startTime: "11:00",
      endTime: "14:30",
      timeZone: "Hanoi/Jakarta",
      location: "Hương Cau Garden",
    },
  ],

  audio: {
    src: "./audio/backsound.mp3",
    title: "Yêu em hơn mỗi ngày",
    artist: "Andiez",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true,
  },

  bankAccounts: [
    {
      bank: "NCB",
      accountNumber: "399999999999",
      accountName: "Nguyễn Thị Tâm",
      logo: "https://www.ncb-bank.vn/cache-buster-1695119533/website/static/images/logo.png",
    },
  ],
  qr: {
    image: "./images/qr.png",
  },
};

export default config;
