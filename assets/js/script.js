$(document).ready(() => {
  let sidebarCollapsed = ($("#navSidepanel").width() === 0);
  let collapsibleDict = []
  
  $("#sidebarButton").click(e => {
    e.preventDefault();
    if (!sidebarCollapsed) {
      $("#navSidepanel").width("0");
      $("#mainFrame").css({"left": 0});
      $("#mainFrame").width("100%");
      $("#sidebarButtonIcon").attr("src", "/assets/static/icon/open-menu.svg");
      $("#sidebarButtonIcon").width("100%")
    }else {
      $("#navSidepanel").width("var(--sidebarWidth)");
      $("#mainFrame").css({"left": "var(--sidebarWidth)"});
      $("#mainFrame").width(
        "calc(" +
        $("#mainFrame").width() + 
        "px - " + 
        $(":root").css("--sidebarWidth") + 
        ")"
        );
      $("#sidebarButtonIcon").attr("src", "/assets/static/icon/close-menu.svg");
      $("#sidebarButtonIcon").width("80%")
    }
    sidebarCollapsed = !sidebarCollapsed;
  });

  $(".collapsible").each((index, element) => {
    $(element).css({"top": index * $(element).height()});
    let btn = $(element).children(".collapsibleButton")[0];
    let content = $(".collapsibleContent")[index];
    collapsibleDict[index] = ($(content).height() === 0);
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