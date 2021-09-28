function loadFade() {
    const linkIds = [
        "github-link",
        "twitter-link",
        "hackaday-link",
        "linkedin-link"
    ]

    document.getElementById("name-header").style.opacity = 1
    setTimeout(() => {document.getElementById("subtitle-header").style.opacity = 1}, 750)

    let timeout = 2500
    for (const linkId of linkIds) {
        timeout += 250
        setTimeout(() => {document.getElementById(linkId).style.opacity = 1}, timeout)
    }
}