import { DriversListComponent } from './drivers-list/drivers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions  } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProductsServicesComponent } from './products-services/products-services.component';
import { AdminAddManagerComponent } from './admin-add-manager/admin-add-manager.component';
import { EditProfileOperadorComponent } from './edit-profile-operador/edit-profile-operador.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorCreateComponent } from './operator-create/operator-create.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prdServic', component: ProductsServicesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'drivers-list', component: DriversListComponent },
  { path: 'adminAddManager', component: AdminAddManagerComponent},
  { path: 'editProfileOperador', component: EditProfileOperadorComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'manager-list', component: ManagerListComponent },
  { path: 'operator-list', component: OperatorListComponent },
  { path: 'operator-create', component: OperatorCreateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }