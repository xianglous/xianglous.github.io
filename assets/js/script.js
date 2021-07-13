$(document).ready(() => {
  /* Handle the collapse of the sidebar */
  let sidebarCollapsed = ($("#mainFrame").offset().left === 0); // sidebar collapsed boolean
  $("#sidebarButton").click(e => {
    e.preventDefault();
    if (!sidebarCollapsed) {
      $("#mainFrame").width("100%"); // expand to fill screen
      $("#sidebarButtonIcon").attr(
        "src",
        "/assets/static/icon/open-menu.svg" // change the icon
        ); 
      $("#sidebarButtonIcon").width("100%"); // adjust icon size
    }else {
      $("#mainFrame").width(
        "calc(" +
        $("#mainFrame").width() + 
        "px - " + 
        $(":root").css("--sidebarWidth") + 
        ")"
        ); // calculate the size of the mainFrame and fill it
      $("#sidebarButtonIcon").attr(
        "src", 
        "/assets/static/icon/close-menu.svg" // change the icon
        );
      $("#sidebarButtonIcon").width("80%"); // adjust the icon size
    }
    sidebarCollapsed = !sidebarCollapsed; // toggle the boolean
  });

  /* Handle the collapse of the collapsibles */
  let collapsibleDict = []; // the collapse booleans
  let toggleCollapse = (index, collapse) => {
    let content = $(".collapsibleContent")[index]; // get the content to collapse/expand
    let btn = $(".collapsibleButton h2")[index]; // get the button header
    if (!collapse && collapsibleDict[index]) {
      $(content).css("margin-top", 0); // show the content
      $(btn).attr("class", "expandedHeader"); // change the header class to display '+'
    }
    if (collapse && !collapsibleDict[index]) {
      $(content).css("margin-top", -$(content).height()); // hide the content
      $(btn).attr("class", "collapsedHeader"); // change the header class to display '-'
    }
    collapsibleDict[index] = collapse; // toggle the boolean
  };

  $(".stickyNode").each((index, element) => {
    let btn = $(".collapsibleButton")[index]; // get the button
    let content = $(".collapsibleContent")[index]; // get the content
    $(element).css({"z-index": 100 - index}); // set the layer
    collapsibleDict[index] = ($(content).css("margin-top") === 0); // set the initial values of the boolean
    $(btn).click((e) => {
      e.preventDefault();
      toggleCollapse(index, !collapsibleDict[index]); // toggle the collapsible
    });
  });

  /* Handle the expansion of the collapsibles on clicking the navigation links */
  document.querySelectorAll('a[href^="#"]').forEach((anchor, index) => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        let content = document.querySelector(anchor.getAttribute('href')); // get the target collapsible
        if (collapsibleDict[index]) {
          toggleCollapse(index, false); // toggle the collapsible
        }
        content.scrollIntoView({
            behavior: 'smooth', // smoothly scroll the the collapsible content
        });
    });
  });
});
