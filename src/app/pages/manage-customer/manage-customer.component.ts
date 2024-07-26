
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
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

  public customerList:any;

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

  loadTable(){
    this.http.get("http://localhost:8080/customer-controller/get-all").subscribe(res=>{
      this.customerList=res;
      console.log(res);
    })
  }

  loadCustomerTable(){
    this.http.get("http://localhost:8080/customer-controller/get-all").subscribe(res=>{
      this.customerList=res;
      console.log(res);
    })
  }

  deleteCustomer(id:number){
    Swal.fire({
      title: "Warning!",
      text: "Are you sure want to delete?",
      icon: "warning",
      showConfirmButton:true,
      showCancelButton:true,

    }).then(res=>{
      if (res.isConfirmed) {
        this.http.delete(`http://localhost:8080/customer-controller/delete-customer/${id}`).subscribe(
          res=>{
            Swal.fire({
              title: "Deleted Successfully!",
              text: "Customer deleted Successfully",
              icon: "success",
        preConfirm:()=>{
          window.location.reload()
        }
            });
          }
        )
      }
    });
  
  }
      
  
  updateCustomer(){}

}
