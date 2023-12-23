import EditableSheetTabsMover from './editable-sheet-tabs-mover';
import PreviewSheetTabsMover from './preview-sheet-tabs-mover';
import SheetTabsMover from './sheet-tabs-mover-interface';

export default class SheetTabsMoverFactory {
  public create(): SheetTabsMover | null {
    let sheetTabsMover: SheetTabsMover | null = null;
    const locationPathPieces = window.location.pathname.split('/');

    if (locationPathPieces.includes('edit') || locationPathPieces.includes('create')) {
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
