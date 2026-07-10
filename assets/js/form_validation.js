const name = document.getElementById("name");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const email = document.getElementById("email");
const form = document.querySelector("form");
const errors = document.querySelectorAll("small");
const nameRegex = /^[A-Za-z\s]{3,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^01[0125][0-9]{8}$/;
const ageRegex = /^(?:1[01][0-9]|120|[1-9][0-9]?|0)$/;




    function validate(input , regex , error) {
        
    if (input.value.trim() === "") {
        
        //  name.value="";
        // name.placeholder="Name is required";
        error.style.display="inline";
        input.style.borderColor="red";
        return false;
    }  if (!regex.test(input.value.trim())) {
        
        error.style.display="inline";
        input.style.borderColor="red";
        return false;
    }
    return true
    }


    form.addEventListener("submit", (e) => {
    // const nameValue = name.value.trim();
    // const emailValue = email.value.trim();
    // const phoneValue = phone.value.trim();
    // const ageValue = age.value.trim();

    const isNameValid = validate(name , nameRegex , errors[0]); 
    const isEmailValid = validate(email , emailRegex , errors[1]); 
    const isPhoneValid = validate(phone , phoneRegex , errors[2]); 
    
        if ( !isNameValid ||!isEmailValid ||!isPhoneValid){
            e.preventDefault();
        }


    
});
