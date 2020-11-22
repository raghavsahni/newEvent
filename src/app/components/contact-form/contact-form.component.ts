import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NodeMailerService } from 'src/app/services/node-mailer.service';


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
    // emailService: any;

    constructor(private formBuilder: FormBuilder ,
        private emailService:NodeMailerService
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
        let email  = this.submitForm.value.email;
    let reqObj = {
      email:JSON.stringify(this.submitForm.value)
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
        this.submitForm.reset();
        this.submitted = false;

      
  }

    }
