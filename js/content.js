function moveTabsToTop() {
    const gridBottomBar = document.getElementById("grid-bottom-bar");
    const editorContainer = document.getElementById("docs-editor-container");
    gridBottomBar.style.zIndex = 0;
    document.body.insertBefore(gridBottomBar, editorContainer);
}

function setObserver(parent, target, callback) {
    const observer = new MutationObserver((mutationRecords, observer) => {
        if (document.getElementById(target)) {
            observer.disconnect();
            callback();
        }
    });
    observer.observe(document.getElementById(parent), {
        childList:true,
        subtree: true
    });
}

setObserver("docs-editor-container", "grid-bottom-bar", moveTabsToTop);
