import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  allUsers: User[] = [];
  subscription1: Subscription = new Subscription();
  isLoading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }

  getUsers() {
    this.isLoading = true;
    this.subscription1 = this.userService.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.allUsers = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err, 'hiiiiiiii');
      },
    });
  }
}
