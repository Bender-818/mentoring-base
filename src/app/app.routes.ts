import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users.component';
import { homePageComponent } from './homePage/homePage.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [

{
    path: 'users',
    component: UsersListComponent 
} , 
{
    path: '', 
    component: homePageComponent 
},
{
path: 'todos',
component: TodosListComponent
}


];
