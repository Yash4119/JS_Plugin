// Check if the current URL contains the "iframe_url" parameter
if (window.location.search.indexOf("iframe_url=") != -1) {
    // Get the value of the "iframe_url" parameter
    var url = new URLSearchParams(window.location.search).get("iframe_url");
    // Create an iFrame element
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    // Create a button element to be displayed on top of the iFrame
    var button = document.createElement("button");
    button.innerHTML = "Hover button";
    button.style.position = "absolute";
    button.style.top = "0";
    button.style.right = "0";
    button.style.zIndex = "1";
    // Append the iFrame and button to the body of the page
    document.body.appendChild(iframe);
    document.body.appendChild(button);
}


// Script to be embedded in head of HTML

// <script type="text/javascript" src="https://github.io/site/iframe-catcher.js"></script>
