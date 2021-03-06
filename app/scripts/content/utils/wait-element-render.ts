const WAIT_ELEMENT_RENDER_INTERVAL = 20;

export function waitElementRender(elementSelector: string, waitTimeout: number): Promise<null> {
  return new Promise((resolve, reject): void => {
    const loopStartTime = Date.now();

    const checkElementLoop = (): void => {
      // Found element
      if (document.querySelectorAll(elementSelector).length > 0) {
        resolve();
        return;
      }

      // Timeout
      if (Date.now() - loopStartTime > waitTimeout) {
        reject();
        return;
      }

      window.setTimeout(checkElementLoop, WAIT_ELEMENT_RENDER_INTERVAL);
    };

    checkElementLoop();
  });
}
