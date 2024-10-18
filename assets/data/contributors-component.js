import { contributorsArray } from "./contributors.js"

(function appendContributorsHtml() {
    document.getElementById('contributors-main-section').innerHTML = `${[...renderContributorsHtml()].join('')}`
})()

//iterates through contributors arr and creates contributor card HTML for each adding them to an arr
function renderContributorsHtml() {

    for (let i = contributorsArray.length; i > 0; i--) {
        const contributorsHtmlArr = contributorsArray.map(contributor => {
        const contributorAvatar = renderAvatarHtml(contributor.avatar, contributor.alt)
        const contributorGitHub = renderGitHubHtml(contributor.gitHub)
        const contributorLinkedIn = renderLinkedInHtml(contributor.linkedIn)

        return `<article class="contributor-card">

                    <h2>${contributor.name}</h2>
                    <br />

                    <div class="avatar-container">
                        ${contributorAvatar}
                    </div>

                    <br />

                    <h3>Find this contributor on:</h3>
                    <span class="social-links">
                        ${contributorGitHub}
                        ${contributorLinkedIn}
                    </span>
                </article>
            `
        }).sort(() => Math.random() -.5) //shuffles contributorsArray

        return contributorsHtmlArr
    }
}

function renderAvatarHtml(avatarSrc, avatarAlt) {
    if (avatarSrc) {
        return `<img class="contributor-avatar" src="${avatarSrc}" alt="${avatarAlt}" />`
    } else {
        return `<img class="contributor-avatar" src="/assets/images/contributors/placeholder-avatar.jpg" alt="placeholder avatar" />`
    }
}

function renderLinkedInHtml(linkedInUrl) {
    if (linkedInUrl) {
        return `<a href="${linkedInUrl}" aria-label="linked-in">
                    <i class="fa-brands fa-linkedin-in fa-2x social-icon" aria-hidden="true"></i>
                </a>`
    } else {
        return ''
    }
}

function renderGitHubHtml(gitHubUrl) {
    if (gitHubUrl) {
        return `<a href="${gitHubUrl}" class="contributor-github" aria-label="github">
                    <i class="fa-brands fa-github social-icon fa-2x" aria-hidden="true" ></i>
                </a>`
    } else {
        return ''
    }
}