import SheetTabsMoverFactory from './content/sheet-tabs-mover-factory';
import SheetTabsMover from './content/sheet-tabs-mover-interface';

(async(): Promise<void> => {
  const sheetTabsMoverFactory = new SheetTabsMoverFactory();
  const sheetTabsMover: SheetTabsMover | null = sheetTabsMoverFactory.create();

  if (sheetTabsMover === null) {
    return;
  }

  await sheetTabsMover.waitRenderTabs();

  // already applied
  if (sheetTabsMover.alreadyAppliedExtension()) {
    return;
  }

  sheetTabsMover.moveToTop();
})();
