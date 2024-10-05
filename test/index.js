const fileInput = document.getElementById('fileInput');
const uploadedImage = document.getElementById('uploadedImage');

fileInput.addEventListener('change', function () {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function() {
            const imageDataURL = reader.result;
            imageVariable = imageDataURL;

            if (imageVariable) {
                uploadedImage.src = imageVariable;
            }
        }

        reader.readAsDataURL(selectedFile); // Start reading the selected file as a data URL.
    }
});
