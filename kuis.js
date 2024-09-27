document.addEventListener("DOMContentLoaded", function() {
    var formContainer = document.getElementById('form-container');

    var form = document.createElement('form');

    // nama
    var nameGroup = document.createElement('div');
    nameGroup.className = 'form-group';
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nama:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.addEventListener('keyup', function() { console.log('keyup on name input'); });
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    form.appendChild(nameGroup);

    // nim
    var nimGroup = document.createElement('div');
    nimGroup.className = 'form-group';
    var nimLabel = document.createElement('label');
    nimLabel.textContent = 'NIM:';
    var nimInput = document.createElement('input');
    nimInput.type = 'text';
    nimInput.id = 'nim';
    nimInput.addEventListener('keydown', function() { console.log('keydown on NIM input'); });

    nimGroup.appendChild(nimLabel);
    nimGroup.appendChild(nimInput);
    form.appendChild(nimGroup);

    // kls
    var classGroup = document.createElement('div');
    classGroup.className = 'form-group';
    var classLabel = document.createElement('label');
    classLabel.textContent = 'Kelas:';
    var classInput = document.createElement('input');
    classInput.type = 'text';
    classInput.name = 'class';
    classInput.addEventListener('keydown', function() { console.log('Keydown on class input'); });

    classGroup.appendChild(classLabel);
    classGroup.appendChild(classInput);
    form.appendChild(classGroup);

    // alamat
    var addressGroup = document.createElement('div');
    addressGroup.className = 'form-group';
    var addressLabel = document.createElement('label');
    addressLabel.textContent = 'Alamat:';
    var addressInput = document.createElement('textarea');
    addressInput.name = 'address';
    addressInput.addEventListener('input', function() { console.log('input on address textarea'); });

    addressGroup.appendChild(addressLabel);
    addressGroup.appendChild(addressInput);
    form.appendChild(addressGroup);

    // jenis kelamin
    var genderGroup = document.createElement('div');
    genderGroup.className = 'form-group';
    var genderLabel = document.createElement('label');
    genderLabel.textContent = 'Jenis Kelamin:';

    var genderMale = document.createElement('input');
    genderMale.type = 'radio';
    genderMale.name = 'gender';
    genderMale.value = 'Laki-laki';
    genderMale.addEventListener('click', function() { console.log('Click on male radio'); });

    var genderFemale = document.createElement('input');
    genderFemale.type = 'radio';
    genderFemale.name = 'gender';
    genderFemale.value = 'Perempuan';
    genderFemale.addEventListener('click', function() { console.log('Click on female radio'); });

    genderGroup.appendChild(genderLabel);
    genderGroup.appendChild(genderMale);
    genderGroup.appendChild(document.createTextNode('laki-laki'));
    genderGroup.appendChild(genderFemale);
    genderGroup.appendChild(document.createTextNode('perempuan'));
    form.appendChild(genderGroup);

    // hobi
    var hobbiesGroup = document.createElement('div');
    hobbiesGroup.className = 'form-group';
    var hobbiesLabel = document.createElement('label');
    hobbiesLabel.textContent = 'hobi:';

    var hobbyReading = document.createElement('input');
    hobbyReading.type = 'checkbox';
    hobbyReading.name = 'hobbies';
    hobbyReading.value = 'membaca';
    hobbyReading.addEventListener('change', function() { console.log('Change on reading checkbox'); });

    var hobbySports = document.createElement('input');
    hobbySports.type = 'checkbox';
    hobbySports.name = 'hobbies';
    hobbySports.value = 'olahraga';
    hobbySports.addEventListener('change', function() { console.log('Change on sports checkbox'); });

    var hobbyTraveling = document.createElement('input');
    hobbyTraveling.type = 'checkbox';
    hobbyTraveling.name = 'hobbies';
    hobbyTraveling.value = 'traveling';
    hobbyTraveling.addEventListener('change', function() { console.log('Change on traveling checkbox'); });

    hobbiesGroup.appendChild(hobbiesLabel);
    hobbiesGroup.appendChild(hobbyReading);
    hobbiesGroup.appendChild(document.createTextNode('membaca'));
    hobbiesGroup.appendChild(hobbySports);
    hobbiesGroup.appendChild(document.createTextNode('olahraga'));
    hobbiesGroup.appendChild(hobbyTraveling);
    hobbiesGroup.appendChild(document.createTextNode('traveling'));

    form.appendChild(hobbiesGroup);

    // kirim
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Kirim';
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Submit button clicked');

        var nameValue = nameInput.value;
        var nimValue = nimInput.value;
        var classValue = classInput.value;
        var addressValue = addressInput.value;
        var genderValue = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
        var hobbiesValues = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(function(checkbox) {
            return checkbox.value;
        }).join(', ');

        document.getElementById('result-name').textContent = nameValue;
        document.getElementById('result-nim').textContent = nimValue;
        document.getElementById('result-class').textContent = classValue;
        document.getElementById('result-address').textContent = addressValue;
        document.getElementById('result-gender').textContent = genderValue;
        document.getElementById('result-hobbies').textContent = hobbiesValues;



    });

    form.appendChild(submitButton);
    formContainer.appendChild(form);
});
