import SheetTabsMoverFactory from './content/sheet-tabs-mover-factory';
import SheetTabsMover from './content/sheet-tabs-mover-interface';

(async (): Promise<void> => {
  const sheetTabsMoverFactory = new SheetTabsMoverFactory();
  const sheetTabsMover: SheetTabsMover | null = sheetTabsMoverFactory.create();

  // Skip if not supported
  if (sheetTabsMover === null) {
    return;
  }

  sheetTabsMover
    .waitTabsRender()
    .then(() => {
      // already applied
      if (sheetTabsMover.alreadyAppliedExtension()) {
        return;
      }

      sheetTabsMover.moveToTop();
    })
    .catch(() => {
      // Do nothing
    });
})();
