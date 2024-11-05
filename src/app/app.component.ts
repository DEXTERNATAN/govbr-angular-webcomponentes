import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular WebComponentes teste';

  name = 'John Doe';
  isActive = false;
  // isDisabled = false;

  onInputChange(newValue: string) {
    console.log('Valor atualizado: ', newValue);
    this.name = newValue;
  }

  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  onTeste(event: Event) {
    event.stopPropagation();

    alert('onTeste');
  }

  updateRegistryForm() {
    this.registrationForm.patchValue({
      name: 'Bob',
    });
  }
}
