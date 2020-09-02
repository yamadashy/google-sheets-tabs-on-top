declare interface Window {
  googleSheetsTabsOnTopApplied: boolean
}

interface SheetTabsMover {
  alreadyAppliedExtension(): boolean;
  waitRenderTabs(): Promise<void>;
  moveToTop(): void;
}

class EditableSheetTabsMover implements SheetTabsMover{
  static readonly APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME = 'data-google-sheets-tabs-on-top-applied';
  static readonly GRID_BOTTOM_BAR_ID: string = 'grid-bottom-bar';
  static readonly EDITOR_CONTAINER_ID: string = 'docs-editor-container';

  alreadyAppliedExtension(): boolean {
    const editorContainer = document.getElementById(EditableSheetTabsMover.EDITOR_CONTAINER_ID);
    return editorContainer.getAttribute(EditableSheetTabsMover.APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME) === '1';
  }

  waitRenderTabs(): Promise<void> {
    return new Promise((resolve) => {
      const loopStartTime = Date.now();

      const checkTabsLoop = (): void => {
        if (document.getElementById(EditableSheetTabsMover.GRID_BOTTOM_BAR_ID)) {
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
    const gridBottomBar = document.getElementById(EditableSheetTabsMover.GRID_BOTTOM_BAR_ID);
    const editorContainer = document.getElementById(EditableSheetTabsMover.EDITOR_CONTAINER_ID);

    if (gridBottomBar && editorContainer) {
      gridBottomBar.style.zIndex = '0';
      document.body.insertBefore(gridBottomBar, editorContainer);
      editorContainer.setAttribute(EditableSheetTabsMover.APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME, '1');
    }
  }
}

class PreviewSheetTabsMover implements SheetTabsMover {
  static readonly APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME = 'data-google-sheets-tabs-on-top-applied';
  static readonly TABLE_BODY_SELECTOR: string = '#sheets-viewport table tbody';
  static readonly CELLS_CONTAINER_SELECTOR: string = 'tr:nth-child(1)';
  static readonly TABS_CONTAINER_SELECTOR: string = 'tr:nth-child(2)';

  alreadyAppliedExtension(): boolean {
    const tableBody =  document.querySelector(PreviewSheetTabsMover.TABLE_BODY_SELECTOR);
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
    const tableBody =  document.querySelector(PreviewSheetTabsMover.TABLE_BODY_SELECTOR);
    const cellsContainer = tableBody.querySelector(PreviewSheetTabsMover.CELLS_CONTAINER_SELECTOR);
    const tabsContainer = tableBody.querySelector(PreviewSheetTabsMover.TABS_CONTAINER_SELECTOR);

    if (cellsContainer && tabsContainer) {
      tableBody.insertBefore(tabsContainer, cellsContainer);
      tableBody.setAttribute(PreviewSheetTabsMover.APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME, '1');
    }
  }
}

(async (): Promise<void> => {
  let sheetTabsMover: SheetTabsMover = null;

  const locationPathPieces = location.pathname.split('/');

  if (locationPathPieces.includes('edit')) {
    sheetTabsMover = new EditableSheetTabsMover();
  } else if (locationPathPieces.includes('preview')) {
    sheetTabsMover = new PreviewSheetTabsMover();
  } else {
    // not supported
    return;
  }

  await sheetTabsMover.waitRenderTabs();

  // already applied
  if (sheetTabsMover.alreadyAppliedExtension()) {
    return;
  }

  sheetTabsMover.moveToTop();

})();
