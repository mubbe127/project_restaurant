
export {aboutPage}

function aboutPage () {

const contentMain =  document.querySelector('main')
const divContainer = document.createElement('div')
divContainer.setAttribute('class','divContainer')
const divContent1= document.createElement('div') 
divContent1.setAttribute('class','divContent1')
const h1Content1 = document.createElement('h1')
h1Content1.setAttribute('class','h1Content1')
h1Content1.textContent="Om oss"

contentMain.innerHTML=""

contentMain.appendChild(divContainer)
divContainer
.appendChild(h1Content1)
divContainer
.appendChild(divContent1)


const divContainer2 = document.createElement('div')
divContainer2.setAttribute('class','divContainer2')
const h2Content2 = document.createElement('h2')
h2Content2.setAttribute('class','h2Content2')
h2Content2.textContent="Jalla Jiep"
const pContent2 = document.createElement('p')
pContent2.textContent="Välkommen till 'jalla jiep' – en plats där matlagning möter passion och gemenskap. Vår resa började med en enkel idé: att skapa en miljö där vänner och familj kan samlas och njuta av utsökt mat, inspirerad av både tradition och innovation."
pContent2.setAttribute('class','pContent2')
const imgContent2= document.createElement('img') 
imgContent2.setAttribute('class','imgContent2')
imgContent2.src='./Background3.png'


divContainer.insertAdjacentElement('afterend', divContainer2)
divContainer2.appendChild(h2Content2)
divContainer2.appendChild(pContent2)    
divContainer2.appendChild(imgContent2)



}


