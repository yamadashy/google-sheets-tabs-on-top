const GRID_BOTTOM_BAR_ID = 'grid-bottom-bar';
const EDITOR_CONTAINER_ID = 'docs-editor-container';

class SheetTabsMover {
  waitRenderTabs(): Promise<void> {
    return new Promise((resolve) => {
      const loopStartTime = Date.now();

      const checkTabsLoop = (): void => {
        if (document.getElementById(GRID_BOTTOM_BAR_ID)) {
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
    const gridBottomBar = document.getElementById(GRID_BOTTOM_BAR_ID);
    const editorContainer = document.getElementById(EDITOR_CONTAINER_ID);
    gridBottomBar.style.zIndex = '0';
    document.body.insertBefore(gridBottomBar, editorContainer);
  }
}

(async (): Promise<void> => {
  const sheetTabsMover = new SheetTabsMover();
  await sheetTabsMover.waitRenderTabs();
  sheetTabsMover.moveToTop();
})();
