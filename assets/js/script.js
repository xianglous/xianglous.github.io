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
    let btn = $(this).find(".collapsibleButton")[0];
    let content = $(this).find(".collapsibleContent")[0];
    collapsibleDict[btn.id] = {
      content: content.id,
      collapsed: true;
    };
    console.log(btn.id);
  });
  for (const [btnid, props] of collapsibleDict) {
    $("#" + btnid).click(e => {
      e.preventDefault();
      console.log('clicked');
      if (props.collapsed) {
        $("#" + props.contentid).height("auto");
      }else {
        $("#" + props.contentid).height("0");
      }
      collapsibleDict[btnid].collapsed = !collapsibleDict[btnid].collapsed;
    });
  }
});
