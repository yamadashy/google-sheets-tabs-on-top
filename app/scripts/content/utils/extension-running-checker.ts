const RUNNING_CHECK_META_NAME = 'google-sheets-tabs-on-top';

export function isAlreadyRunningExtension(): boolean {
  const meta: HTMLMetaElement = document.querySelector(`meta[name="${RUNNING_CHECK_META_NAME}"]`);

  if (meta) {
    return true;
  }

  // Insert meta to head
  const metaElement: HTMLMetaElement = document.createElement('meta');
  metaElement.name = RUNNING_CHECK_META_NAME;
  metaElement.content = 'true';
  document.head.appendChild(metaElement);

  return false;
}
