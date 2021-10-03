import SheetTabsMover from './sheet-tabs-mover-interface';
import { waitElementRender } from './utils/wait-element-render';

const APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME = 'data-google-sheets-tabs-on-top-applied';
const TABLE_BODY_SELECTOR = '#sheets-viewport table tbody';
const CELLS_CONTAINER_SELECTOR = 'tr:nth-child(1)';
const TABS_CONTAINER_SELECTOR = 'tr:nth-child(2)';
const WAIT_TABS_RENDER_TIMEOUT = 1000 * 30;
const WAIT_TABS_RENDER_INTERVAL = 20;

export default class PreviewSheetTabsMover implements SheetTabsMover {
  alreadyAppliedExtension(): boolean {
    const tableBody = document.querySelector(TABLE_BODY_SELECTOR);
    return tableBody.getAttribute(APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME) === '1';
  }

  waitTabsRender(): Promise<void> {
    return waitElementRender(TABLE_BODY_SELECTOR, WAIT_TABS_RENDER_INTERVAL, WAIT_TABS_RENDER_TIMEOUT);
  }

  moveToTop(): void {
    const tableBody = document.querySelector(TABLE_BODY_SELECTOR);
    const cellsContainer = tableBody.querySelector(CELLS_CONTAINER_SELECTOR);
    const tabsContainer = tableBody.querySelector(TABS_CONTAINER_SELECTOR);

    if (cellsContainer && tabsContainer) {
      tableBody.insertBefore(tabsContainer, cellsContainer);
      tableBody.setAttribute(APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME, '1');
    }
  }
}
