import readingTime from "reading-time";

export const getTimeRead = (text) => {
  const time = readingTime(text).minutes;

  return Math.ceil(time);
};

export const formatDate = (d) => {
  const date = new Date(d);
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return (d = dd + "/" + mm + "/" + yyyy);
}

export function getFirstParagraphAfterTitle(markdown) {
  const lines = markdown.split(/\r?\n/);

  const titleIndex = lines.findIndex(line => line.trim().startsWith('#'));

  for (let i = titleIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length > 0) {
      return line;
    }
  }
  return '';
}