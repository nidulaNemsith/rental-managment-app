
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete("http://localhost:8080/customer-controller/delete-customer/${id}", { responseType: 'text' }).subscribe(res => {
          this.loadCustomerTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);

        })
        console.log(id);


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }
      
  
  updateCustomer(){}

}
