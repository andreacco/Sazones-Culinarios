
export const validate = (input: any, e: any, err: any) => {
    // ------------------ INIT USEFUL CONSTANTS ------------------//
    const errors = {
        name: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        interests: ""
    };
    
    console.log(errors, "ERROOOOORS VALIDATE");
    

    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let regexNombre = /^([a-z]*[A-Z]*[À-ÿ]*[\u00f1]*[\u00d1]*)+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    let regexPhoneNumber = /^([0-9]*)$/
    // ------------------ END USEFUL CONSTANTS ------------------//
    
    // ------------------ INIT USEFUL FUNCTIONS ------------------//
    const validateName = (input: any) => {
        if(!input.name) {
            errors.name = "El nombre es requerido"
        }
        else if (!regexNombre.test(input.name)) {
            errors.name = "El nombre solo puede contener letras!"
        }
    }
    
    const validateLastName = (input: any) => {
        if(!input.lastname) {
            errors.lastname = "El apellido es requerido"
        }
        else if (!regexNombre.test(input.lastname)) {
            errors.lastname = "El apellido solo puede contener letras!"
        }
    }

    const validateEmail = (input: any) => {
        if(!input.email) {
            errors.email = "El email es requerido"
        }
        else if (!regexEmail.test(input.email)) {
            errors.email = "Por favor, introduce un email válido"
        }
    }

    const validatePhoneNumber = (input: any) => {
        if(!input.phoneNumber) {
            errors.phoneNumber = "El número de teléfono es requerido"
        }
        else if(regexPhoneNumber.test(input.phoneNumber)) {
            errors.phoneNumber = "Por favor, introduce un número de teléfono válido"
        }
    }
    
    const validateInterests = (input: any) => {
        if(!input.interests.length) {
            errors.interests = "Los intereses son requeridos"
        }
    }
    // ------------------ END USEFUL FUNCTIONS ------------------//
    
    // ------------------ INIT CONDITIONALS ------------------//
    if (e === null) {
        validateName(input)
        validateLastName(input)
        validateEmail(input)
        validateInterests(input)
        validatePhoneNumber(input)
    }
    
    if (e === "name" || err.lastname.length > 1) {
        validateName(input)
    }

    if (e === "lastname" || err.lastname.length > 1) {
        validateLastName(input)
    }

    if (e === "email" || err.email.length > 1) {
        validateEmail(input)
    }
    
    if (e === "phoneNumber" || err.phoneNumber.length > 1) {
        validatePhoneNumber(input)
    }
    
    if (e === "interests" || err.interests.length > 1) {
        validateInterests(input)
    }
    // ------------------ END CONDITIONALS ------------------//
    
    return errors;
}