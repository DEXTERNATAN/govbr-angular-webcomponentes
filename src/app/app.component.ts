import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
    status: new FormControl(false),
  });

  // Esse método captura o valor do `checked` sempre que `brDidCheckedChange` é emitido
  onCheckedChange(event: CustomEvent<boolean>): void {
    const isChecked = event.detail;
    console.log('Switch checked status:', isChecked);
    this.isActive = isChecked;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  updateRegistryForm() {
    this.registrationForm.patchValue({
      name: 'Bob',
    });
  }
}
