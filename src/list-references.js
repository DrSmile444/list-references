const { PageExecutor } = require('page-executor');

const { formattingUtil } = require('./utils/formatter.util');
const { referencesFormatting } = require('./const/formatting.const');


class ListReferences {
  constructor(pattern = referencesFormatting.VAK_UKRAINE) {
    /**
     * @private
     * */
    this.pattern = pattern;

    /**
     * @private
     * */
    this.pageExecutor = new PageExecutor();
  }

  /**
   * @param {string[]} links - Link to be scraped and processed
   * @param {object} options - Process options
   * @param {Date} options.date - Date to be used in references. Default is today
   * @param {string} options.pattern - Reference string pattern
   * @param {string} options.dateString - Already formatted date to be used in references
   *
   * @return {Promise<string[]>} - Processed references
   */
  processLinks(links, options = {}) {
    const {
      date,
      dateString,
      pattern = this.pattern,
    } = options;

    return this.pageExecutor.perPage(links, ({ window, document, location }) => {
      return formattingUtil({ window, document, location }, { date, dateString, pattern });
    });
  }
}

module.exports = {
  ListReferences,
}
