import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);
  public messageForm = this.formBuilder.group({
    name: ['', Validators.required],
    message: ['', Validators.required]
  });
  submitted = false;
  success = false;

  public onSubmit(): void {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

}
