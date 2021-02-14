/**
 * Convert UK date to US date
 * Because Date object only accept US date format
 * DD/MM/YYYY -> MM/DD/YYYY
 * @param dateString
 * @returns Date
 */
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((datePart) => parseInt(datePart));
  // Month -1 because it starts count from 0
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
