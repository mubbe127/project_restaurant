
export {initialpageload}
import {aboutPage} from './about.js';
import hungrig from './showMenuBar.js'

function initialpageload () {


    const contentMain =  document.querySelector('main')
    contentMain.innerHTML = `
    <div class="content">
        <div class="news">
            <h2> Nyhet! <br> Maskin-burgaren</h2>
            <button>Läs mer</button>
        </div>
    </div>`

    const buttonMenu = document.querySelector('#menu')
    buttonMenu.addEventListener('click', hungrig)
    
    
    const buttonAbout = document.querySelector('#about')
    buttonAbout.addEventListener('click', aboutPage)
    
    const buttonHome = document.querySelector('#home')
    buttonHome.addEventListener('click', initialpageload)
    
    
}


