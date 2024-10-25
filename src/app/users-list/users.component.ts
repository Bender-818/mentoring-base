import { AsyncPipe, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { usersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { ChangeDetectionStrategy } from "@angular/core";


export interface User {
    id: number; 
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
         lat: string;
         lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


@Component({
 selector: 'app-users-list',
 templateUrl: './users.component.html',
 styleUrl: './users.component.scss',
 standalone: true , 
 imports: [NgFor, UserCardComponent, AsyncPipe],
 changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsersListComponent {
readonly UsersApiService = inject(usersApiService)
readonly usersService = inject(UsersService)
users = this.usersService.users$
constructor() {
    this.UsersApiService.getUsers().subscribe(
        (Response:any) => {
            this.usersService.setUsers(Response);
            this.users = this.usersService.users$
        }
    )
}
      deleteUser(id: number) {
        this.usersService.deleteUser(id)
        this.users = this.usersService.users$
      } 
      
}