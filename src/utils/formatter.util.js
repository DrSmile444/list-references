/**
 * Format reference by passed window and options
 * @param {Window} window
 * @param {Location} location
 * @param {Document} document
 * @param {Date} date - Date to be used in references. Default is today
 * @param {string} pattern - Reference string pattern
 * @param {string} dateString - Already formatted date to be used in references
 * */
function formattingUtil({ window, document, location }, { date, dateString, pattern }) {
  const activeDate = date || new Date();
  const month = ('0' + (activeDate.getMonth() + 1)).slice(-2);

  const title = document.title;
  const url = location.href;
  const referenceAccessDate = dateString || `${activeDate.getDate()}.${month}.${activeDate.getFullYear()}`;

  return pattern
    .replace('${title}', title)
    .replace('${url}', url)
    .replace('${date}', referenceAccessDate);
}

module.exports = {
  formattingUtil,
}
