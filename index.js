let form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var formData = new FormData(form);
    for (var [key, value] of formData.entries()) { 
        console.log(key, value);
      }
});


    

    