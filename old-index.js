const uploadLinkEvent = document.getElementById('uploadLink');
const ImgUploadModal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');

    //uploadLinkEvent é o link de upload
    //ao ser clicado, deve abrir um modal

let imageVariable;
let imageBeingUploaded;
let imgFlag = false;


uploadLinkEvent.onclick = function openModal () {
    ImgUploadModal.style.display = 'block';
    modalOverlay.style.display = 'block';

    const modalTitle = document.getElementById('modalWindowTitle');
    modalTitle.textContent = 'Upload de Imagem';
    
    const modalDescription = document.getElementById('modalDescription');
    modalDescription.textContent = 'Favor, selecionar sua imagem.'

    let modalContent = document.getElementById('modalContent');
    
    let uploadInput = document.createElement('input');
    uploadInput.setAttribute('type', 'file');
    uploadInput.setAttribute('name', 'fileUpload');
    uploadInput.setAttribute('id', 'fileUpload');
    modalContent.appendChild(uploadInput);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('id', 'submitbutton');
    
    submitButton.addEventListener('click', function () {
        const fileInput = document.getElementById('fileUpload');
        const selectedFile = fileInput.files[0];

            if (selectedFile) {
                const reader = new FileReader();

                reader.onload = function() {
                    const imageDataURL = reader.result;                    
                
                imageVariable = imageDataURL;
                

                if (imageVariable) {
                    // Assuming you have an <img> element with the id "uploadedImage"
                    const uploadedImage = document.getElementById('uploadedImage');
                    uploadedImage.src = imageVariable;
                }
                }
                
            }
    });


    modalContent.appendChild(submitButton);





    let closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.setAttribute('id', 'closebutton');
    closeButton.addEventListener('click', closeModal);
    modalContent.appendChild(closeButton);
    

}

function closeModal () {
    ImgUploadModal.style.display = 'none';
    modalOverlay.style.display = 'none';
    const removeFileUpload = document.querySelector('#fileUpload');
    const removeCloseButton = document.querySelector('#closebutton');
    const removeSubmitButton = document.querySelector('#submitbutton');
    removeFileUpload.remove();
    removeCloseButton.remove();
    removeSubmitButton.remove()
    
}



// function to check if an img was uploaded has to:
// trigger another function that inserts the image in the page
// clear the flag variable and imageBeingUploaded variable


// function openPopUpforUpload () {

// }

//     function imageUpload ()
    // trigger pop-box
    // create new input element for image inside popup
    // create submit button insde popup
    // add unique ID + date to each image
    // clear variable
    // insert uploaded img with unique ID into thumbnail grid, as a thumbnail