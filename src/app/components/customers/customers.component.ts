import { Component, OnInit,ViewChild } from '@angular/core';
import { User } from 'interfaces/user-model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer:User[]
  setstyle={}
  en=false;
   user:User
   userin:User
   extend:Boolean=false
   form:Boolean=false
   currentclass={}
   @ViewChild('userForm') data:any
  constructor(){
        this.customer=[]
        this.user={
            name:'aslam',
            age:30
        }
                console.log(this.user);

        this.setsuccessclass()
        this.userin={
            name:'',
            age:0,
            job:""
        }
    }
    setsuccessclass(){
        this.currentclass={
            'btn-success':!this.extend,
            'btn-danger':this.extend

        }
        
    }

  ngOnInit(): void {
    console.log('init');
    setTimeout(()=>{this.customer=[{
      name:'aslam',age:9,job:'IT',hide:true
    },{
      name:'Ram',age:10,job:'ECE',hide:true
    },{
      name:'Vinoth',age:11,job:'EEE',hide:true
    }]},2000)

    this.styles()

  }
  styles(){
    this.setstyle={
      'font-weight':this.customer.length==0?'bold':''
    }
  }

  addUser(){
    this.customer.unshift(this.userin)
    this.userin.hide=true
     this.userin={
            name:'',
            age:0,
            job:""
        }
  }
  submit({value}:{value:User}){
console.log(value);
 this.customer.unshift(value);
 this.data.reset()

  }

}
