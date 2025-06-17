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
    date: "2025-06-22",
    time: "11:00",
    timeZone: "Hanoi/Jakarta",
    dateTime: "2025-06-22T03:00:00Z", // ISO 8601 format
    name: "Queen Hall, Queen Plaza",
    address: "91B2 Phạm Văn Hai, Phường 3, Tân Bình, Hồ Chí Minh",
    phone: "0982 423 388",
    maps_url: "https://maps.google.com/?q=Queen+Plaza+Tân+Bình",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.232026574061!2d106.66049787504214!3d10.793533089356266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297c5248df09%3A0xfb67a62d51ec33d8!2sQueen%20Plaza%20T%C3%A2n%20B%C3%ACnh!5e0!3m2!1svi!2s!4v1750083345025!5m2!1svi!2s",
    maps_navigation:
      "https://www.google.com/maps/dir/?api=1&destination=Queen+Plaza+Tân+Bình,+Phạm+Văn+Hai,+phường+3,+Tân+Bình,+Hồ+Chí+Minh",
    latitude: 10.7932799, // Replace with actual coordinates
    longitude: 106.6630617, // Replace with actual coordinates
  },

  eventDetails: [
    {
      title: "Tại Thành Phố Hồ Chí Minh",
      date: "2025-06-22",
      startTime: "11:00",
      endTime: "14:30",
      timeZone: "Hanoi/Jakarta",
      location: "Queen Hall, Queen Plaza",
    },
    {
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
