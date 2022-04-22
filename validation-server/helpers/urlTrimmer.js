const urlTrimmer = (url) => {
    let slashMark = 0
    let customUrl = ''
    for (let i = 0; i < url.length; i++) {
        if (slashMark < 2) {
            if (url[i] === '/') slashMark++
        } else if (slashMark >= 2) {
            customUrl += url[i]
        }
    }

    return customUrl
}

module.exports = { urlTrimmer }