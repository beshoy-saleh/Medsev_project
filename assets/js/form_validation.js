const name_f = document.getElementById("name");
console.log(name_f);

const phone_f = document.getElementById("phone");
const age_f = document.getElementById("age");
const email_f = document.getElementById("email");
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

    const isNameValid = validate(name_f , nameRegex , errors[0]); 
    const isEmailValid = validate(email_f , emailRegex , errors[1]); 
    const isPhoneValid = validate(phone_f , phoneRegex , errors[2]); 
    
        if ( !isNameValid ||!isEmailValid ||!isPhoneValid){
            e.preventDefault();
        }


    
});
