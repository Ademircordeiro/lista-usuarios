import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['nome', 'data', 'ativo'];
  @Input() usersList: IUser[] = {} as IUser[];
  @Output('userSelected') userSelectedEmitted = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitted.emit(user);
  }
}
