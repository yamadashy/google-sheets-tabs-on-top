import SheetTabsMover from './sheet-tabs-mover-interface';

export default class PreviewSheetTabsMover implements SheetTabsMover {
  static readonly APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME = 'data-google-sheets-tabs-on-top-applied';
  static readonly TABLE_BODY_SELECTOR: string = '#sheets-viewport table tbody';
  static readonly CELLS_CONTAINER_SELECTOR: string = 'tr:nth-child(1)';
  static readonly TABS_CONTAINER_SELECTOR: string = 'tr:nth-child(2)';

  alreadyAppliedExtension(): boolean {
    const tableBody = document.querySelector(PreviewSheetTabsMover.TABLE_BODY_SELECTOR);
    return tableBody.getAttribute(PreviewSheetTabsMover.APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME) === '1';
  }

  waitRenderTabs(): Promise<void> {
    return new Promise((resolve) => {
      const loopStartTime = Date.now();

      const checkTabsLoop = (): void => {
        if (document.querySelector(PreviewSheetTabsMover.TABLE_BODY_SELECTOR)) {
          resolve();
          return;
        }

        // timeout 30 seconds
        if (Date.now() - loopStartTime > 1000 * 30) {
          resolve();
          return;
        }

        setTimeout(checkTabsLoop, 50);
      };

      checkTabsLoop();
    });
  }

  moveToTop(): void {
    const tableBody = document.querySelector(PreviewSheetTabsMover.TABLE_BODY_SELECTOR);
    const cellsContainer = tableBody.querySelector(PreviewSheetTabsMover.CELLS_CONTAINER_SELECTOR);
    const tabsContainer = tableBody.querySelector(PreviewSheetTabsMover.TABS_CONTAINER_SELECTOR);

    if (cellsContainer && tabsContainer) {
      tableBody.insertBefore(tabsContainer, cellsContainer);
      tableBody.setAttribute(PreviewSheetTabsMover.APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME, '1');
    }
  }
}
