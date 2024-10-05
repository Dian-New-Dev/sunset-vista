const button = document.getElementById('upButton')


button.onclick = function () {
    const htmlBody = document.getElementById('body');
    let inputField = document.createElement('input');
    inputField.setAttribute('type', 'file');
    htmlBody.appendChild(inputField);



    

    inputField.addEventListener("change", () => {
        image.src = URL.createObjectURL(inputField.files[0])
    });
}

const image = document.querySelector("img");

