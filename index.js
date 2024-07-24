import { contributorsArray } from "./assets/data/contributors.js"

const contributorSection = document.getElementById("contributors-main-section")



function getContributors() {
    let contributors = ''

    contributorsArray.forEach(function (contributor) {
        
        contributors += `
            <article class="contributor-card">
            <h2>${contributor.name}</h2>
            <br>
            <div class="img-container" style="background-image: ${contributor.avatar};">
            
            </div>
            <br>
            <h3>Find this contributor on:</h3>
            <div class="social-links"  />
                
                ${ contributor.gitHub ? `
                <a href="${contributor.gitHub}" class="contributor-github" aria-label="github">
                    <i class="fa-brands fa-github social-icon fa-2x" aria-hidden="true" ></i>
                </a>`: '' }
            
                ${contributor.linkedIn ? `
                    <a href="${contributor.linkedIn}" aria-label="linked-in">
                        <i class="fa-brands fa-linkedin-in fa-2x social-icon" aria-hidden="true"></i>
                    </a>
                ` : ''}
            </div>
            </article>
            `
        })
    
    return contributors
}


function renderContributors() {
    contributorSection.innerHTML = getContributors()
}

renderContributors()