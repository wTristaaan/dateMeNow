import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
  standalone:false
})
export class UserProfilComponent  implements OnInit {
  user: User | undefined
  username: string = ""

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser()
    this.username = this.user!.name
  }

  navigateToCredits() {
    this.router.navigate(['/credits']);
  }

}
