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
    var btn = $(this).find(".collapsibleButton")[0];
    var content = $(this).find(".collapsibleContent")[0];
    collapsibleDict[btn.id] = false;
    btn.click(e => {
      e.preventDefault();
      if (collapsibleDict[btn.id]) {
        alert('clicked')
        content.style.display = "none";
      }else {
        content.style.display = "block";
      }
      collapsibleDict[btn.id] = !collapsibleDict[btn.id];
    });
  });
});
