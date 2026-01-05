/**
 * Format date to relative time for recent dates (within 24 hours)
 * or absolute date for older dates
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Show relative time for posts edited within the last 24 hours
  if (diffInSeconds < 60) {
    return "Last edited just now";
  } else if (diffInMinutes < 60) {
    return `Last edited ${diffInMinutes} ${
      diffInMinutes === 1 ? "minute" : "minutes"
    } ago`;
  } else if (diffInHours < 24) {
    return `Last edited ${diffInHours} ${
      diffInHours === 1 ? "hour" : "hours"
    } ago`;
  }

  // For older posts, show the actual date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Add time if it was today or yesterday
  if (diffInDays < 2) {
    options.hour = "numeric";
    options.minute = "2-digit";
  }

  return `${date.toLocaleDateString("en-US", options)}`;
};
