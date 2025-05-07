export const getSortedFutureEvents = (events, todaysDate) => {
    const today = new Date(todaysDate);
  
    return events
      .map(event => ({ ...event, date: new Date(event.start) }))
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date);
  }