export default interface SheetTabsMover {
  alreadyAppliedExtension(): boolean;
  waitRenderTabs(): Promise<void>;
  moveToTop(): void;
}
