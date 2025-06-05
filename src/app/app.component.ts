import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from '../data/users-list';
import { IfilterOptions } from './interfaces/filter/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  filteredList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showDetails = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.filteredList = UsersList;
    }, 1000);

  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showDetails = true;
  }

  onFilter(filterOptions: IfilterOptions) {
    this.filteredList = filterUsersList(filterOptions, this.usersList);
  }
}



