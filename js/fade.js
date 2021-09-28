function loadFade() {
    document.getElementById("name-header").style.opacity = 1
    setTimeout(() => {document.getElementById("subtitle-header").style.opacity = 1}, 500)
    setTimeout(() => {document.getElementById("links").style.opacity = 1}, 1000)
}