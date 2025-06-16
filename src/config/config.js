// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Đám Cưới của Tâm và Long iu dấu",
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
    timezone: "ICT",
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
      title: "Saigon",
      date: "2025-06-22",
      startTime: "11:00",
      endTime: "14:30",
      timeZone: "Hanoi/Jakarta",
      location: "Queen Hall, Queen Plaza",
      description:
        "We invite you to join us in celebrating our wedding ceremony.",
    },
    {
      title: "Dak Lak",
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
    src: "/audio/backsound.mp3",
    title: "Fulfilling Humming",
    artist: "Nasheed",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true,
  },

  bankAccounts: [
    {
      bank: "NCB",
      accountNumber: "1234567890",
      accountName: "Nguyen Thi Tam",
      logo: "/path/to/bca-logo.png",
    },
    {
      bank: "VietinBank",
      accountNumber: "0987654321",
      accountName: "Nguyen Ngoc Long",
      logo: "/path/to/mandiri-logo.png",
    },
  ],
  qr: {
    image: "https://lh3.googleusercontent.com/pw/AP1GczMhWqTRO7zPt49PYrDJIrBWvGL2drxQFjs1yoc2a1DJ3NpD9Qgalnm7GcKwurAu0i6WwVA3YDj4VePxU9Uc7-riqkxeB3ladmFSY8YAY4KXcjPCvK04wu15Id1KTkjtni9Hi1xej1LTAk4Pg4aTWWKKGQ=w621-h932-s-no-gm",
  },
};

export default config;
