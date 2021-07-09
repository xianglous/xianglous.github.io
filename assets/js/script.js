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
    sidebarCollapsed = !sidebarCollapsed;
  });
  $(".collapsible").each((index, element) => {
    let btn = $(element).children(".collapsibleButton")[0];
    let content = $(element).children(".collapsibleContent")[0];
    collapsibleDict[index] = true;
    $(btn).click((e) => {
      e.preventDefault();
      if (collapsibleDict[index]) {
        $(content).height("auto");
      }else {
        $(content).height("0");
      }
      collapsibleDict[index] = !collapsibleDict[index];
    });
  });
});
