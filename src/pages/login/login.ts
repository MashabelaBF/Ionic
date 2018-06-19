import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesterPage } from '../tester/tester';
// import { Employee } from '../tester/Employee';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Employee{
    
  empName;
  empSurname;
  empID;
  empRole;

  constructor(name,surname,ID,role){

      this.empName=name;
      this.empSurname=surname;
      this.empID=ID;
      this.empRole=role;
  }
  
}
export class LoginPage {
  
  name;
  password;

  arrEmp = [];
  empName;
  empSurname;
  empID;
  empRole;

  addEmp(empName, empSurname, empID, empRole) {

    let emp = new Employee(empName, empSurname, empID, empRole);
    this.arrEmp.push(emp);

    // alert(emp);
    // console.log();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  inputName(event) {
    this.empName = event.target.value;
  }
  inputID(event) {
    this.empID = event.target.value;
  }
  
  login() {
    if (this.empName != null && this.empID != null) {
        if(this.empName==this.arrEmp[0] && this.empID==this.arrEmp[2]){
          this.navCtrl.push(HomePage);
        }else{
          alert('Wrong Username or ID');
        }

    }else{
      alert('Field cannot be Empty!');
    }
  }
}
