import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageItemComponent } from './pages/manage-item/manage-item.component';
import { ManageCustomerComponent } from './pages/manage-customer/manage-customer.component';
import { NavComponent } from './common/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageItemComponent,ManageCustomerComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-managment-app';
}
