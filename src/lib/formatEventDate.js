export const formatEventDate = (isoString, format = "full") => {
  const date = new Date(isoString);

  const formats = {
    full: {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Jakarta",
    },
    short: {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    },
    time: {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    },
  };

  let formatted = date.toLocaleDateString("en-US", formats[format]);

  // Handle time format separately
  if (format === "time") {
    return date.toLocaleTimeString("en-US", formats[format]);
  }

  // Format adjustment for full date
  if (format === "full") {
    const parts = formatted.split(", ");
    if (parts.length === 2) {
      formatted = `${parts[0]}, ${parts[1]}`;
    }
  }

  return formatted;
};
