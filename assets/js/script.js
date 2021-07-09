$(document).ready(function(){
  let sidebarCollapsed = true;
  let collapsibleDict = []
  $("#sidebarButton").click(e => {
    e.preventDefault();
    if (!sidebarCollapsed) {
      $("#navSidepanel").width("0");
      $("#sidebarIcon").attr("src", "/assets/static/icon/open-menu.svg");
    }else {
      $("#navSidepanel").width("200px");
      $("#sidebarIcon").attr("src", "/assets/static/icon/close-menu.svg");
    }
    collapseButton = !collapseButton;
  });
  $(".collapsible").each(() => {
    let btn = $(this).children(".collapsibleButton")[0];
    let content = $(this).children(".collapsibleContent")[0];
    console.log(this.id);
    console.log(btn.id);
    collapsibleDict[btn.id] = true;
    if (collapsibleDict[btn.id]) {
      $(content).height("auto");
    }else {
      $(content).height("0");
    }
    collapsibleDict[btn.id] = !collapsibleDict[btn.id];
  });
});
