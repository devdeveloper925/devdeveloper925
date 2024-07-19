function toogleVideo() {
    const video = document.getElementById("myvideo");
    if (video.pause) {
        video.onplay();
    }else {
        video.pause();
    }
}