// Import pages
import type {SelectionPageInterface} from '@interfaces/BO/modules/modulesAndServices/selection';
import {SelectionPage} from '@versions/1.7.2/pages/BO/modules/modulesAndServices/selection';
import {Page} from '@playwright/test';

/**
 * Bo selection page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class SelectionVersion extends SelectionPage implements SelectionPageInterface {
  private readonly pageTitleSelector: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on selection page
   */
  constructor() {
    super();

    this.pageTitle = 'Module selection';

    // Selectors
    this.pageTitleSelector = '#main-div div.header-toolbar h2';
  }

  /**
   * Get page title
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPageTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.pageTitleSelector);
  }
}

const selectionPage = new SelectionVersion();
export {selectionPage, SelectionVersion as SelectionPage};
