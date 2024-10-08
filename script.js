function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.conteiner-titulo h2 span');
typeWrite(titulo);


function typingEffect() {
    const contactTexts = shuffleArray(['Front-End']);
    const typedtext = document.getElementsByClassName("desenvolvedor")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => {
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        if (char == contactTexts[idx].length + 15) removing = true;

        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; 

        if (typedtext.innerHTML.length === 0) {

            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0;
            removing = false;
        }

    }, 150);

}

typingEffect();

function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



class Menu {
    constructor(mobileMenu,navList,covens) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

} 

const menu = new Menu (
    ".menu",
    "header nav"

)

menu.init();




const getOut1 = document.getElementById('getout1');
const getOut2 = document.getElementById('getout2');
const fade = document.getElementById('fade');
const modalLinkme = document.getElementById('modal-linkme');
const linkMe = document.getElementById('linkme');
const modalFanpage = document.getElementById('modal-fanpage');
const fanPage = document.getElementById('fanpage');



    linkMe.onclick = () => {
        modalLinkme.classList.toggle("hide");
        fade.classList.toggle('hide');
    };
    getOut1.onclick = () => {
        modalLinkme.classList.toggle("hide");
        fade.classList.toggle('hide');
    };
    




    fanPage.onclick = () => {
        modalFanpage.classList.toggle("hide");
        fade.classList.toggle('hide');
    };
    getOut2.onclick = () => {
        modalFanpage.classList.toggle("hide");
        fade.classList.toggle('hide');
    };