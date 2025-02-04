import { Component } from '@angular/core';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { ComponentsService } from '../services/components.service';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { CodeComponent } from '../components/code/code.component';
import { EndChoiceComponent } from '../components/end-choice/end-choice.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  showLoginDiv = false;
  dynamicComponent: any;

  constructor(
    private componentsService: ComponentsService
  ) { }

  ngOnInit() {
    this.dynamicComponent = AuthFormComponent;
    setTimeout(() => {
      this.showLoginDiv = true;
    }, 1000);

    this.componentsService.data$.subscribe(newData => {
      if(newData == "changeComponent")
        this.dynamicComponent = CreateAccountComponent
      if(newData == "codeComponent")
        this.dynamicComponent = CodeComponent
    });
  }

}
