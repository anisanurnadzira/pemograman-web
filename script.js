document.addEventListener("DOMContentLoaded", function() {
    
    var formContainer = document.getElementById('form-container');

 
    var form = document.createElement('form');

   
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nama:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';

    
    var nimLabel = document.createElement('label');
    nimLabel.textContent = 'NIM:';
    var nimInput = document.createElement('input');
    nimInput.type = 'text';
    nimInput.name = 'nim';

   
    var classLabel = document.createElement('label');
    classLabel.textContent = 'Kelas:';
    var classInput = document.createElement('input');
    classInput.type = 'text';
    classInput.name = 'class';

   
    var addressLabel = document.createElement('label');
    addressLabel.textContent = 'Alamat:';
    var addressInput = document.createElement('textarea');
    addressInput.name = 'address';

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Kirim';

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(nimLabel);
    form.appendChild(nimInput);
    form.appendChild(classLabel);
    form.appendChild(classInput);
    form.appendChild(addressLabel);
    form.appendChild(addressInput);
    form.appendChild(submitButton);

    formContainer.appendChild(form);

  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        var nameValue = nameInput.value;
        var nimValue = nimInput.value;
        var classValue = classInput.value;
        var addressValue = addressInput.value;

        
        document.getElementById('result-name').textContent = nameValue;
        document.getElementById('result-nim').textContent = nimValue;
        document.getElementById('result-class').textContent = classValue;
        document.getElementById('result-address').textContent = addressValue;
    });

   
    nameInput.addEventListener('focus', function() {
        console.log('Nama field focused');
    });
    nimInput.addEventListener('blur', function() {
        console.log('NIM field blurred');
    });
    classInput.addEventListener('change', function() {
        console.log('Kelas field changed');
    });
    addressInput.addEventListener('input', function() {
        console.log('Alamat field input');
    });
    submitButton.addEventListener('mouseover', function() {
        console.log('Mouse over submit button');
    });
});
