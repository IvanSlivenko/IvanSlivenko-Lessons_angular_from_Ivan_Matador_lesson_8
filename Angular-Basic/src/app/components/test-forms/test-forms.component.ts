import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { F } from '@angular/cdk/keycodes';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-test-forms',
  standalone: true,
  imports: [
            MatCardModule, 
            MatButtonModule, 
            MatGridListModule, 
            MatInputModule, 
            MatFormFieldModule, 
            FormsModule, 
            ReactiveFormsModule
          ],
  templateUrl: './test-forms.component.html',
  styleUrl: './test-forms.component.scss',
  
})
export class TestFormsComponent {
  form2: FormGroup = new FormGroup({
    name: new FormControl('Name'),
    text: new FormControl('Text')
  });
  sendForm(form: any){
    // console.log(form);
    console.log(form.value);
    // console.log(form.value.text);
    // console.log(form.value.name);
    // form.value.text="";
    
  }
}
