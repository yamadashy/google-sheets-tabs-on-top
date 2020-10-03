import SheetTabsMover from './sheet-tabs-mover-interface';

export default class EditableSheetTabsMover implements SheetTabsMover {
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
