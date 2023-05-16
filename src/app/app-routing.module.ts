import { DriversListComponent } from './drivers-list/drivers-list.component';
import { NgModule, Component } from '@angular/core';
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
import { EditProfileManagerComponent } from './edit-profile-manager/edit-profile-manager.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorCreateComponent } from './operator-create/operator-create.component';
import { EditProfileClientComponent } from './edit-profile-client/edit-profile-client.component';
import { AdminAddMechanicComponent } from './admin-add-mechanic/admin-add-mechanic.component';
import { AdminAddDriverComponent } from './admin-add-driver/admin-add-driver.component';
import { ClientListServicesComponent } from './client-list-services/client-list-services.component';
import { ManagerListWarehouseComponent } from './manager-list-warehouse/manager-list-warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseInfoComponent } from './warehouse-info/warehouse-info.component';
import { ChangePasswordRequestComponent } from './change-password-request/change-password-request.component';
import { ChangePasswordSendedComponent } from './change-password-sended/change-password-sended.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { ShipmentBoardComponent } from './shipment-board/shipment-board.component';
import { ProgramShipmentComponent } from './program-shipment/program-shipment.component';
import { ClientQuoteServicesComponent } from './client-quote-services/client-quote-services.component';
import { VehicleListCRUDComponent } from './vehicle-list-crud/vehicle-list-crud.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { EditProfileDriverComponent } from './edit-profile-driver/edit-profile-driver.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { WarehouseInfoAdminComponent } from './warehouse-info-admin/warehouse-info-admin.component';
import { WarehouseListClientComponent } from './warehouse-list-client/warehouse-list-client.component';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { DriverBoardComponent } from './driver-board/driver-board.component';
import { AuthGuard } from './_services/AuthGuard';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prdServic', component: ProductsServicesComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard] },
  { path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard] },
  { path: 'drivers-list', component: DriversListComponent, canActivate: [AuthGuard] },
  { path: 'adminAddDriver', component: AdminAddDriverComponent, canActivate: [AuthGuard]},
  { path: 'adminAddMechanic', component: AdminAddMechanicComponent, canActivate: [AuthGuard]},
  { path: 'adminAddManager', component: AdminAddManagerComponent, canActivate: [AuthGuard]},
  { path: 'editProfileOperador', component: EditProfileOperadorComponent, canActivate: [AuthGuard] },
  { path: 'editProfileManager', component: EditProfileManagerComponent, canActivate: [AuthGuard]},
  { path: 'aboutUs', component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: 'manager-list', component: ManagerListComponent, canActivate: [AuthGuard] },
  { path: 'operator-list', component: OperatorListComponent, canActivate: [AuthGuard] },
  { path: 'operator-create', component: OperatorCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile-client', component: EditProfileClientComponent, canActivate: [AuthGuard] },
  { path: 'driver-create', component: AdminAddDriverComponent, canActivate: [AuthGuard] },
  { path: 'Service-List', component: ClientListServicesComponent, canActivate: [AuthGuard] },
  { path: 'manager-list-warehouse', component: ManagerListWarehouseComponent, canActivate: [AuthGuard] },
  { path: 'warehouse-list', component: WarehouseListComponent, canActivate: [AuthGuard] },
  { path: 'warehouse-info/:id', component: WarehouseInfoComponent, canActivate: [AuthGuard] },
  { path: 'warehouse-edit/:id', component: WarehouseEditComponent, canActivate: [AuthGuard] },
  { path: 'change-password-r', component: ChangePasswordRequestComponent},
  { path: 'change-password-s', component: ChangePasswordSendedComponent},
  { path: 'change-password/:token', component: ChangePasswordComponent},
  { path: 'shipment-board', component: ShipmentBoardComponent, canActivate: [AuthGuard]},
  { path: 'program-shipment', component: ProgramShipmentComponent, canActivate: [AuthGuard]},
  { path: 'quote-service', component: ClientQuoteServicesComponent, canActivate: [AuthGuard]},
  { path: 'vehicle-list', component: VehicleListCRUDComponent, canActivate: [AuthGuard]},
  { path: 'vehicle-create', component: VehicleCreateComponent, canActivate: [AuthGuard]},
  { path: 'edit-driver-profile', component: EditProfileDriverComponent, canActivate: [AuthGuard]},
  { path: 'warehouse-list-client', component: WarehouseListClientComponent, canActivate: [AuthGuard]},
  { path: 'warehouse-create', component: WarehouseCreateComponent, canActivate: [AuthGuard]},
  { path: 'warehouse-info-admin/:id', component: WarehouseInfoAdminComponent, canActivate: [AuthGuard]},
  { path: 'confirm-email/:data', component: EmailConfirmComponent},
  { path: 'driver-board', component: DriverBoardComponent, canActivate: [AuthGuard]},
  { path: 'client-requests', component: RegistrationRequestsComponent, canActivate: [AuthGuard]},
  { path: 'not-yet-implemented', component: NotImplementedComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
