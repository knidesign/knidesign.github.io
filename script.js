window.addEventListener("pageshow", () => {
    
    // display headers
    console.log('Web development services');
    console.log('KNI Design, Corp.');
    console.log('Miami, FL');
    console.log('USA');

    // handle form submission
    var formEmail = document.getElementById("formEmail").value;
    if (formEmail.length > 0){
        // trigger thank you response
        console.log('--------');
        console.log('Thank you for contacting KNI Design!');

        // display current form values
        console.log('--------');
        console.log('Name: ' + document.getElementById("formName").value);
        console.log('Email: ' + document.getElementById("formEmail").value);
        console.log('Message: ' + document.getElementById("formMessage").value);
        console.log('--------');

        // reset form values
        document.getElementById("formName").value = '';
        document.getElementById("formEmail").value = '';
        document.getElementById("formMessage").value = '';
    }

  })

