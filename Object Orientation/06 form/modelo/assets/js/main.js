class ValidateForm {
    constructor() {
        this.forms = document.querySelector('.forms');
        this.events();
    }

    events() {
        this.forms.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.isValid();
        const passwdIsValid = this.passwdIsValid();

        if(isValid && passwdIsValid) {
            alert('forms sended');
            this.forms.submit();
        }
    }

    passwdIsValid() {
        let valid = true;

        const passwd = this.forms.querySelector('.password');
        const re_passwd = this.forms.querySelector('.rePassword');

        if(passwd.value !== re_passwd.value) {
            valid = false;
            this.createError(passwd, 'Password and Re-Password must be equal');
            this.createError(re_passwd, 'Password and Re-Password must be equal');
        }

        if(passwd.value.length < 6 || passwd.value.length > 12) {
            valid = false;
            this.createError(passwd, 'Password must be between 6 and 12 characters');
        }

        return valid;
    }

    isValid(){
        let valid = true;

        for(let errorText of this.forms.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.forms.querySelectorAll('.is-empty')) {
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `${label} cant be empty`);
                valid = false
            }

            if(field.classList.contains('cpf')) {
                if(!this.validateCPF(field)) valid = false;
            }

            if(field.classList.contains('user')) {
                if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }


    validateUser(field) {
        const user = field.value;
        let valid = true;

        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'User must have between 3 or 12 characters');
            valid = false;
        }
        if(!user.match(/[a-zA-Z0-9]+/g)) {
            this.createError(field, "user can't have symbols");
            valid = false;
        }
        return valid;
    }


    validateCPF(field) {
        const cpf = new Cpf(field.value);

        if(!cpf.validate()) {
            this.createError(field, 'CPF invalid');
            return false;
        }

        return true;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const validate = new ValidateForm();