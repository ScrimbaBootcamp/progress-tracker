import { contributorsArray } from "./assets/data/contributors.js"

const contributorSection = document.getElementById("contributors-main-section")


function renderContributors(){

    for (let contributor of contributorsArray){
        
        

         contributorSection.innerHTML += `
            <article class="contributor-card">
            <h2>${contributor.name}</h2>
            <br>
            <img src="${contributor.avatar}">
            <br>
            <h2>Find this contributor on:</h2>
            <div class="social-links">
                    
                <a href="${contributor.gitHub}" class="contributor-github" aria-label="github">
                    <i class="fa-brands fa-github social-icon fa-2x" aria-hidden="true" ></i>
                </a>
            
                <a href="${contributor.linkedIn}" aria-label="linked-in">
                    <i class="fa-brands fa-linkedin-in fa-2x" aria-hidden="true"></i>
                </a>
            </div>
            </article>
            `
            contributorSection.style.backgroundImage = `${contributor.avatar}`
            
    }
    
}

renderContributors()