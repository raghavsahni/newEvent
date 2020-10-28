import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ContactService } from 'src/app/services/contact.service';

import { MustMatch } from '../contact-form/mustMatch';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  submitForm: FormGroup;
    submitted = false;
    showMsg: boolean = false;
    phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";

    constructor(private formBuilder: FormBuilder ,
        // private contact: ContactService
        ) { }

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

        
        if (this.submitForm.invalid) {

            return;
        }
        this.showMsg= true;

        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.submitForm.value))
        this.submitForm.reset();
        this.submitted = false;

        // console.log(FormData)
    // this.contact.PostMessage(FormData)
    //   .subscribe(response => {
    //     location.href = 'https://mailthis.to/confirm'
    //     console.log(response)
    //   }, error => {
    //     console.warn(error.responseText)
    //     console.log({ error })
    //   })


        // this.submitForm.reset();
        // this.submitted = false;
  }

    }
