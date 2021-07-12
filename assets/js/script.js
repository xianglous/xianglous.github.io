$(document).ready(() => {
  let sidebarCollapsed = ($("#navSidepanel").width() === 0);
  let collapsibleDict = [];
  $("#sidebarButton").click(e => {
    e.preventDefault();
    if (!sidebarCollapsed) {
      $("#navSidepanel").width("0");
      $("#mainFrame").css({"left": 0});
      $("#mainFrame").width("100%");
      $("#sidebarButtonIcon").attr("src", "/assets/static/icon/open-menu.svg");
      $("#sidebarButtonIcon").width("100%");
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
      $("#sidebarButtonIcon").width("80%");
    }
    sidebarCollapsed = !sidebarCollapsed;
  });

  $(".stickyNode").each((index, element) => {
    let btn = $(".collapsibleButton")[index];
    let content = $(".collapsibleContent")[index];
    $(element).css({"z-index": 100 - index});
    collapsibleDict[index] = ($(content).height() === 0);
    $(btn).click((e) => {
      e.preventDefault();
      if (collapsibleDict[index]) {
        $(content).css("margin-top", "0");
      }else {
        $(content).css("margin-top", -$(content).height());
      }
      collapsibleDict[index] = !collapsibleDict[index];
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor, index) => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        let content = document.querySelector(anchor.getAttribute('href'));
        if (collapsibleDict[index]) {
          $($(".collapsibleContent")[index]).css("margin-top", "0");
          collapsibleDict[index] = false;
        }
        content.scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
});
