import SheetTabsMoverFactory from './content/sheet-tabs-mover-factory';
import SheetTabsMover from './content/sheet-tabs-mover-interface';
import { isAlreadyRunningExtension } from './content/utils/extension-running-checker';

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
      // Check already running extension
      if (isAlreadyRunningExtension()) {
        return;
      }

      // Check already running extension (For backward compatibility)
      if (sheetTabsMover.alreadyAppliedExtension()) {
        return;
      }

      sheetTabsMover.moveToTop();
    })
    .catch(() => {
      // Do nothing
    });
})();
