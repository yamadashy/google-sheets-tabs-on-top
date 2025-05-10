import SheetTabsMoverFactory from './content/sheet-tabs-mover-factory';
import type SheetTabsMover from './content/sheet-tabs-mover-interface';
import { isAlreadyRunningExtension } from './content/utils/extension-running-checker';

const RUNNING_CHECK_IDENTIFIER = 'google-sheets-tabs-on-top';

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
      if (isAlreadyRunningExtension(RUNNING_CHECK_IDENTIFIER)) {
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
