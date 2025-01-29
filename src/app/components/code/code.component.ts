import { Component, OnInit } from '@angular/core';
import { CreateAccountService } from 'src/app/services/create-account.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent  implements OnInit {

  constructor(private createAccountService: CreateAccountService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.value.length > 1) {
          target.value = target.value[0];
        }
        if (/[^0-9]/.test(target.value)) {
          target.value = '';
        }
        if (target.value.length === 1 && index < otpInputs.length - 1) {
          (otpInputs[index + 1] as HTMLInputElement).focus();
        }
      });

      input.addEventListener('keydown', (event) => {
        const keyboardEvent = event as KeyboardEvent;
        const target = event.target as HTMLInputElement;
        if (keyboardEvent.key === 'Backspace' && target.value.length === 0 && index > 0) {
          (otpInputs[index - 1] as HTMLInputElement).focus();
        }
      });
    });
  }

  createAccount(){
    this.createAccountService.checkAccount();
  }

  onFocus() {
    const div = document.querySelector('.login-div') as HTMLElement;
    div.style.position = "relative"
  }

  onBlur(){
    const div = document.querySelector('.login-div') as HTMLElement;
    div.style.position = "absolute"
  }
}
