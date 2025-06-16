// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Đám Cưới của Tâm và Long",
    description:
      "Mình cưới nhau rồi nè, đến chung vui với tụi mình nha!",
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
    address: "419B Pham Van Hai, Phuong 1, Quan Tan Binh",
    phone: "+84 93 5775 159",
    maps_url: "https://maps.google.com/?q=Queen+Plaza+Tan+Binh",
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503.16179771562247!2d106.66306165003611!3d10.79327993962583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297c5248df09%3A0xfb67a62d51ec33d8!2sQueen%20Plaza%20T%C3%A2n%20B%C3%ACnh!5e0!3m2!1sen!2s!4v1750056299537!5m2!1sen!2s",
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
      description:
        "We invite you to join us in celebrating our wedding ceremony.",
    },
    {
      title: "Tại Đăk Lắk",
      date: "2025-07-23",
      startTime: "11:00",
      endTime: "14:30",
      timeZone: "Hanoi/Jakarta",
      location: "Hương Cau Garden",
      description:
        "We invite you to join us in celebrating our wedding ceremony.",
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
    }
  ],
  qr: {
    image: "./images/qr.png",
  },
};

export default config;
