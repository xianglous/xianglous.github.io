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
    let btn = $(this).find(".collapsibleButton")[0];
    let content = $(this).find(".collapsibleContent")[0];
    collapsibleDict[btn.id] = false;
    console.log(btn.id);
    $(btn).click(e => {
      e.preventDefault();
      console.log('clicked');
      if (collapsibleDict[btn.id]) {
        $(content).height("0");
      }else {
        $(content).height("auto");
      }
      collapsibleDict[btn.id] = !collapsibleDict[btn.id];
    });
  });
});
