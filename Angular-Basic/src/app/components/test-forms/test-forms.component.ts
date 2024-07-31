import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-test-forms',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './test-forms.component.html',
  styleUrl: './test-forms.component.scss'
})
export class TestFormsComponent {

}
