import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { ProductsServicesComponent } from './products-services/products-services.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
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
import { QuoteServicesComponent } from './quote-services/quote-services.component';
import { MovilMocksComponent } from './movil-mocks/movil-mocks.component';
import { ClientListServicesComponent } from './client-list-services/client-list-services.component';
import { ManagerListWarehouseComponent } from './manager-list-warehouse/manager-list-warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseInfoComponent } from './warehouse-info/warehouse-info.component';
import { ChangePasswordRequestComponent } from './change-password-request/change-password-request.component';
import { ChangePasswordSendedComponent } from './change-password-sended/change-password-sended.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ShipmentBoardComponent } from './shipment-board/shipment-board.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { ProgramShipmentComponent } from './program-shipment/program-shipment.component';
import { ClientQuoteServicesComponent } from './client-quote-services/client-quote-services.component';
import { VehicleListCRUDComponent } from './vehicle-list-crud/vehicle-list-crud.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { EditProfileDriverComponent } from './edit-profile-driver/edit-profile-driver.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { WarehouseInfoAdminComponent } from './warehouse-info-admin/warehouse-info-admin.component';
import { WarehouseListClientComponent } from './warehouse-list-client/warehouse-list-client.component';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    ProductsServicesComponent,
    DriversListComponent,
    AdminAddManagerComponent,
    EditProfileOperadorComponent,
    AboutUsComponent,
    ManagerListComponent,
    OperatorListComponent,
    OperatorCreateComponent,
    EditProfileClientComponent,
    AdminAddMechanicComponent,
    AdminAddDriverComponent,
    QuoteServicesComponent,
    MovilMocksComponent,
    ClientListServicesComponent,
    ManagerListWarehouseComponent,
    WarehouseListComponent,
    WarehouseInfoComponent,
    ChangePasswordRequestComponent,
    ChangePasswordSendedComponent,
    ChangePasswordComponent,
    WarehouseEditComponent,
    ProgramShipmentComponent,
    ShipmentBoardComponent,
    WarehouseEditComponent,
    ClientQuoteServicesComponent,
    VehicleListCRUDComponent,
    VehicleCreateComponent,
    EditProfileDriverComponent,
    EditProfileManagerComponent,
    WarehouseCreateComponent,
    WarehouseInfoAdminComponent,
    WarehouseListClientComponent,
    EmailConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
