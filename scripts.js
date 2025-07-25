document.addEventListener("visibilitychange", () => {
  const video = document.getElementById("bg-video");
  if (document.visibilityState === "visible") {
    if (video.paused) {
      video.play().catch((e) => {
        console.warn("Video replay failed:", e);
      });
    }
  }
});
