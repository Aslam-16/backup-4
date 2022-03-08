import {Component} from '@angular/core';
import { User } from 'interfaces/user-model';

@Component({
    selector:'app-user',
    templateUrl:`./user.component.html`,
     styleUrls:[`./user.component.css`],
    styles:[`h1{
        color:blue
    }`]

})

export class UserComponent{
   user:User
   userin:User
   extend:Boolean=false
   form:Boolean=false
   currentclass={}
    constructor(){
        
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
    addUser(){
        
    }
    
}


    
    




    function setdanger() {
        throw new Error('Function not implemented.');
    }

