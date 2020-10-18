import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../contact-form/mustMatch';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  submitForm: FormGroup;
    submitted = false;
    phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.submitForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
            message: [''],
            // password: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', Validators.required]
        }
        //  {
        //     validator: MustMatch('password', 'confirmPassword')
        // }
        
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.submitForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.submitForm.invalid) {

            return;
        }
        

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.submitForm.value))
        this.submitForm.reset();
        this.submitted = false;

    }
}
