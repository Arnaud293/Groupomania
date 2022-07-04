export const dateParser = (num) => {
  let options = {
    hours: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let timeStamp = Date.parse(num);

  let date = new Date(timeStamp).toLocaleDateString('fr-FR', options);

  return date.toString();
};
