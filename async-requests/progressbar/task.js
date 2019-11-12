let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.addEventListener('submit', () => {
    var formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

    // xhr.onprogress = function() {
    //     alert( 'Загружено на сервер');
    // }

    xhr.onprogress = function(event) {
        progress.value = event.loaded / event.total;
      }
})


