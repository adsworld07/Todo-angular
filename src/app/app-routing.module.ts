
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';
import { AuthGuard } from './auth.guard'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user-todos', component: UserTodosComponent, canActivate: [AuthGuard] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
