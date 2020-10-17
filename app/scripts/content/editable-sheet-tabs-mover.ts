import SheetTabsMover from './sheet-tabs-mover-interface';
import { waitElementRender } from './utils/wait-element-render';

const APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME = 'data-google-sheets-tabs-on-top-applied';
const GRID_BOTTOM_BAR_ID = 'grid-bottom-bar';
const EDITOR_CONTAINER_ID = 'docs-editor-container';
const WAIT_TABS_RENDER_TIMEOUT = 1000 * 30;

export default class EditableSheetTabsMover implements SheetTabsMover {
  alreadyAppliedExtension(): boolean {
    const editorContainer = document.getElementById(EDITOR_CONTAINER_ID);
    return editorContainer.getAttribute(APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME) === '1';
  }

  waitTabsRender(): Promise<void> {
    return waitElementRender(`#${GRID_BOTTOM_BAR_ID}`, WAIT_TABS_RENDER_TIMEOUT);
  }

  moveToTop(): void {
    const gridBottomBar = document.getElementById(GRID_BOTTOM_BAR_ID);
    const editorContainer = document.getElementById(EDITOR_CONTAINER_ID);

    if (gridBottomBar && editorContainer) {
      gridBottomBar.style.zIndex = '0';
      document.body.insertBefore(gridBottomBar, editorContainer);
      editorContainer.setAttribute(APPLIED_EXTENSION_FLAG_ATTRIBUTE_NAME, '1');
    }
  }
}
