const button = document.getElementById('upButton');
const overlay = document.querySelector('.overlay');

let nextImage;
let enlargedImage;
let rightButton;
let previousImage;

let imgCounter = 0;
const imgElements = {};


button.onclick = function () {
    const htmlBody = document.querySelector('#buttonAndInput');
    let inputField = document.createElement('input');
    inputField.setAttribute('id', 'inputField');                            //this function does:
    inputField.setAttribute('type', 'file');                                //1 - create input
    htmlBody.appendChild(inputField);
                                                                            //2 - receives image
    inputField.addEventListener("change", () => {                           //3 - place image in main panel
        let newImage = document.createElement('img')
    newImage.src = URL.createObjectURL(inputField.files[0])                 //4 - erases input
        const elementToRemove = document.getElementById('inputField');
        insertImginGrid(newImage);
        elementToRemove.remove();

    });
}

function insertImginGrid(image) {       //this function inserts image, makes it clickable
    const htmlBody = document.querySelector('.mainPanel');
    imgElements[imgCounter] = image;
    imgElements[imgCounter].setAttribute('id', 'img' + imgCounter);
    imgElements[imgCounter].setAttribute('class', 'thumbnail');
    htmlBody.appendChild(imgElements[imgCounter]);
    console.log('Foi adicionada a ' + imgElements[imgCounter])


    imgElements[imgCounter].addEventListener('click', function () {
        const body = document.querySelector('body');
        if (!this.classList.contains("enlarge")) {
            this.classList.toggle("enlarge");
            const overlay = document.getElementsByClassName('overlay')[0];
            
            const thumbnail = document.getElementsByClassName('thumbnail')[0];
            thumbnail.style.cursor = 'auto';
            
            overlay.style.display = 'block';
            overlay.style.cursor = 'pointer';
            body.appendChild(overlay);
            createButtons();
            closeOverlayAndEnlarged ();
            
        }
        

    })

    
    
    imgCounter++;
        
}

function closeOverlayAndEnlarged () {
    if (overlay && getComputedStyle(overlay).display !== 'none') {
        overlay.addEventListener('click', function () {
            overlay.style.display = 'none'
            for (let i = 0; i < imgCounter; i++) {
                imgElements[i].classList.remove("enlarge");
            }
        leftButton.style.display = 'none';
        rightButton.style.display = 'none';
        })
    } else {
        // Your code here if the condition is not met
    }
}
  
function createButtons () {
    const mainPanel = document.getElementsByClassName('mainPanel')[0];
    
    leftButton = document.createElement('button');
    leftButton.id = 'leftButton';
    leftButton.textContent = 'Left';

    rightButton = document.createElement('button');
    rightButton.id = 'rightButton';
    rightButton.textContent = 'Right';
    
    mainPanel.append(leftButton, rightButton);
    console.log('acho que foi man');
    theButtonsWork(mainPanel);

    

        //cria setas e as bota abaixo da imagem
    //seta para esquerda: verifica qual das imagens tem enlarge, tira seu enlarge e adiciona
        // a imagem anterior ao enlarge
    //seta para a direita: verifica qual das imagens tem enlarge, tira seu enlarge e adiciona
        // a próxima imagem ao enlarge
}

// rightButton.addEventListener('click', function () {

//         if (nextImage) {
//             enlargedImage.classList.remove('enlarge');
//             nextImage.setAttribute('class', 'enlarge');
            
//         } 
//     })

function theButtonsWork (mainPanel) {
    // enlargedImage = mainPanel.querySelector('.enlarge');
    // nextImage = enlargedImage.nextElementSibling;
    // console.log(nextImage);
    // previousImage = enlargedImage.previousElementSibling;
    // console.log(previousImage);

    rightButton.addEventListener('click', function() {
        enlargedImage = mainPanel.querySelector('.enlarge');
        nextImage = enlargedImage.nextElementSibling;
        if (nextImage) {
            enlargedImage.classList.remove('enlarge');
            nextImage.setAttribute('class', 'enlarge');
            
        } 
    })

    leftButton.addEventListener('click', function() {
        enlargedImage = mainPanel.querySelector('.enlarge');
        previousImage = enlargedImage.previousElementSibling;
        if (previousImage) {
            enlargedImage.classList.remove('enlarge');
            previousImage.setAttribute('class', 'enlarge');
            
        } 
    })
}

