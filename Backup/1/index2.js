const button = document.getElementById('upButton');
const overlay = document.querySelector('.overlay');

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

        })
    } else {
        // Your code here if the condition is not met
    }
}
  





