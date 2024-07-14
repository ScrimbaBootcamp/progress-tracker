const contributors = [
  {
    name: 'Micha',
    linkedIn: 'https://linkedin.com/in/michaella-rodriguez',
    gitHub: 'https://github.com/michaella23',
  },
  {
    name: 'Erik',
    linkedIn: 'https://www.linkedin.com/in/erik-ramirez-atl/',
    gitHub: 'https://github.com/eram23',
    avatar: '',
  },
  {
    name: 'Fadumo Ahmed',
    linkedIn: '#',
    gitHub: 'https://github.com/fame372',
    avatar: "url('./assets/images/contributors/fadumo-avator-photo.jpeg')",
  },
  {
    name: 'Geofrey Le Meur',
    linkedIn: 'https://www.linkedin.com/in/geoffreylemeur/',
    gitHub: 'https://github.com/BuckyBuck135',
    avatar: "url('./assets/images/contributors/geoffrey-avatar.png')",
  },
  {
    name: 'Paula Fenner',
    linkedIn: '',
    gitHub: 'https://github.com/paulaFenner',
    avatar: "url('./assets/images/contributors/paula-avatar.jpeg')",
  }, 
  {
    name: 'Sam Craig',
    linkedIn: 'https://www.linkedin.com/in/sam-craig-059834252/',
    gitHub: 'https://github.com/Samcraig77',
    avatar: "url('.assets/images/contributors/Sam-avatar.jpg')"
},
];

const contributorSection = document.getElementById("contributors-section")

function renderContributors() {
for (i = 0; i < 0; i++) {

}
}

function createContributorSlide(array) {

array = Object.values 

contributorSection.innerHTML += `
<section class="contributor-slide">
<h2>${contributors.name}</h2>
<img src="${contributors.avatar}" alt="">
<i class="linkedIn-icon" href="${contributors.linkedIn}">LinkedIn</a>
<i class="gitHub-icon" href="${contributors.gitHub}">Github</a>
 
</section>`
}