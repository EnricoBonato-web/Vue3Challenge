export const FormattData = (unformattedDate: Date) => {
  const date = new Date(unformattedDate);
  return (
    ('0' + date.getDate()).slice(-2) +
    '.' +
    ('0' + date.getMonth()).slice(-2) +
    '.' +
    ('0' + date.getFullYear()).slice(-2) +
    ', ' +
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2)
  );
};
export const FormattEuro = (euro: number | string) => {
  new Number(euro);
  return Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(euro));
};
export const CalcDate = (date1: Date, date2: Date) => {
  // get total seconds between the times
  let delta = Math.abs(date1.getTime() - date2.getTime()) / 1000;

  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  //const seconds = delta % 60;
  return days * 24 + (hours > 8 ? 12 : 0);
};
