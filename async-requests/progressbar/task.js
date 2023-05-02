const form = document.querySelector('#form');
const progress = document.getElementById( 'progress' );
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
      };
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload',true);
    const formData = new FormData(form);
    xhr.send(formData);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            alert("Файл успешно загружен");
        }}

});