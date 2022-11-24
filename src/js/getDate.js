export const getDate = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${new Date().getDate()} ${
    month[new Date().getMonth()]
  } ${new Date().getFullYear()}`;
};
