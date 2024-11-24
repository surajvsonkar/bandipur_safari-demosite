function showIframe() {
  const iframeContainer = document.getElementById("iframe-container");
  const iframe = document.getElementById("video-iframe");

  iframe.src = "https://www.youtube.com/embed/example-video-id";
  iframeContainer.classList.remove("d-none");
}

function closeIframe() {
  const iframeContainer = document.getElementById("iframe-container");
  const iframe = document.getElementById("video-iframe");

  iframe.src = "";
  iframeContainer.classList.add("d-none");
}
