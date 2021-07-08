$(document).ready(function(){
  let collapseButton = false;
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
});