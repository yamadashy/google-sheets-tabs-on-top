export default interface SheetTabsMover {
  alreadyAppliedExtension(): boolean;
  waitTabsRender(): Promise<void>;
  moveToTop(): void;
}
