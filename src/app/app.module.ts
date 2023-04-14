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
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorCreateComponent } from './operator-create/operator-create.component';
import { AdminAddDriverComponent } from './admin-add-driver/admin-add-driver.component';
import { QuoteServicesComponent } from './quote-services/quote-services.component';
import { MovilMocksComponent } from './movil-mocks/movil-mocks.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseInfoComponent } from './warehouse-info/warehouse-info.component';
import { ChangePasswordRequestComponent } from './change-password-request/change-password-request.component';
import { ChangePasswordSendedComponent } from './change-password-sended/change-password-sended.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
<<<<<<< HEAD
import { CancelShipmentComponent } from './cancel-shipment/cancel-shipment.component';
=======
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
>>>>>>> 37959fcedce03c3a24043d49cea2757e5e0fd76c

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
    AdminAddDriverComponent,
    QuoteServicesComponent,
    MovilMocksComponent,
    WarehouseListComponent,
    WarehouseInfoComponent,
    ChangePasswordRequestComponent,
    ChangePasswordSendedComponent,
    ChangePasswordComponent,
<<<<<<< HEAD
    CancelShipmentComponent
=======
    WarehouseEditComponent
>>>>>>> 37959fcedce03c3a24043d49cea2757e5e0fd76c
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
