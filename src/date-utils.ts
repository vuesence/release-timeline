export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear()
  );
}

export function eachDayOfInterval(startDate: Date, endDate: Date): Date[] {
  const days: Date[] = [];
  const currentDate = new Date(startDate);
  currentDate.setHours(0, 0);

  // eslint-disable-next-line no-unmodified-loop-condition
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
}
