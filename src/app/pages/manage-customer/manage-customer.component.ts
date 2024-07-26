
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [HttpClientXsrfModule,FormsModule,CommonModule],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {

  public customer={
    firstName:"",
    lastName:"",
    city:"",
    contact:""
  }

  constructor(private http:HttpClient){}

  addCustomer(){
      this.http.post("http://localhost:8080/customer-controller/add-customer",this.customer).subscribe(
        (data)=>{
          Swal.fire({
            title:"Customer Added!",
            text:"You clicked the button",
            icon:"success"
          })
        }
      )



  }

}
