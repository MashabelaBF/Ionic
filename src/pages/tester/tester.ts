import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Employee } from './Employee';
import { LoginPage } from '../login/login';
import arrEmp from '../tester/EmployeeArray';
/**
 * Generated class for the TesterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tester',
  templateUrl: 'tester.html',
})
export class TesterPage {
 
  // arrEmpl= arrEmp;
  empName;
  empSurname;
  empID;
  empRole;
  empPic;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TesterPage');
  }

  inputName(event) {
    this.empName = event.target.value;
  }
  inputSurname(event) {
    this.empSurname = event.target.value;
  }
  inputID(event) {
    this.empID = event.target.value;
  }
  inputRole(event) {
    this.empRole = event.target.value;
  }
  addEmp() {
    if (this.empName !=null && this.empSurname !=null && this.empID !=null) {
        arrEmp.push(this.empName +" "+ this.empSurname +" "+ this.empID +" "+this.empRole);
        this.navCtrl.push(LoginPage);
    } else {
      alert('Wrong');
    }
  }

  editEmp(i){
    if(this.empName !=null && this.empSurname !=null && this.empID !=null){
      arrEmp[i]=(this.empName +" "+ this.empSurname +" "+ this.empID);
    }else{
      alert("Inputs cannot be Empty!");
    }
          
           
  }
  deleteEmp(i){
    if(arrEmp!=null){
      arrEmp.splice(i,1);
    }else{
      alert('Array Empty');
    }
           
  }
  addArr() {
    
    let emp = new Employee(this.empName,this.empSurname,this.empID,this.empRole);
    arrEmp.push(emp);

    // alert(emp);
    // console.log();
  }
}
