(() => {
  const gridBottomBar = document.getElementById("grid-bottom-bar");
  const editorContainer = document.getElementById("docs-editor-container");
  gridBottomBar.style.zIndex = 0;
  document.body.insertBefore(gridBottomBar, editorContainer);
})();
