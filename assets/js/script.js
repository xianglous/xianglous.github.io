$(document).ready(function(){
  let collapseButton = false;
  let collapsibleDict = []
  $("#sidebarButton").click(e => {
    e.preventDefault();
    if (collapseButton) {
      $("#navSidepanel").width("0");
      $("#sidebarIcon").attr("src", "/assets/static/icon/open-menu.svg");
    }else {
      $("#navSidepanel").width("200px");
      $("#sidebarIcon").attr("src", "/assets/static/icon/close-menu.svg");
    }
    collapseButton = !collapseButton;
  });
  $(".collapsible").each(() => {
    btn = this.children(".collapsibleButton").get(0);
    content = this.children(".collapsibleContent").get(0);
    collapsibleDict.push({
      btn.id: true,
    });
    btn.click(e => {
      e.preventDefault();
      if (collapsibleDict[btn.id]) {
        content.style.display = "block";
      }else {
        content.style.display = "none";
      }
      collapsibleDict[btn.id] = false;
    });
  });
});
