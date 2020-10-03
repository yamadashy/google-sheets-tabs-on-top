import EditableSheetTabsMover from './editable-sheet-tabs-mover';
import PreviewSheetTabsMover from './preview-sheet-tabs-mover';
import SheetTabsMover from './sheet-tabs-mover-interface';

export default class SheetTabsMoverFactory {
  public create(): SheetTabsMover | null {
    let sheetTabsMover: SheetTabsMover = null;
    const locationPathPieces = location.pathname.split('/');

    if (locationPathPieces.includes('edit')) {
      sheetTabsMover = new EditableSheetTabsMover();
    } else if (locationPathPieces.includes('preview')) {
      sheetTabsMover = new PreviewSheetTabsMover();
    } else {
      // not supported
      return null;
    }

    return sheetTabsMover;
  }
}
