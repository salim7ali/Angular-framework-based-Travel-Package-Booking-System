import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {ShareService} from '../share.service';
import {MatDialog} from '@angular/material/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CommonService} from '../common.service';  
import {Http,Response, Headers, RequestOptions } from '@angular/http';  
@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.css']
  })
export class BookingsComponent implements OnInit {

  noOfRows: number; 
  choice: number;
  bookingNum: number = 6435324;
  choiceCost: number = 0;
  // cost: number = 4999;
  discount: number = 0;
  discountTier = 'No Discount';
  calcDiscount() {
    if(this.noOfRows > 5){
      this.discount = 0.12;
      this.discountTier = 'Tier 2';
    }
    else if(this.noOfRows>2){
      this.discount = 0.05;
      this.discountTier = 'Tier 1';
    }
    else{
      this.discount = 0.0;
      this.discountTier = 'No Discount';
    }
  }
  choiceData = [
    ['Lotus temple',  4999],
    ['Taj Mahal',  4999],
    ['Delhi Streets',  1999],
    ['Himachal Buddisht Mountain pass',  3999],
    ['Rajasthan Chittor Fort',  5999],
    ['India Gate',  4499],
    ['Nanjangud(Karnataka)',  999],
    ['Golden Temple',  3999]
  ];
  choiceCostList = [4999, 4999, 1999, 3999, 5999, 4499, 999, 3999];

  text = '';

  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  constructor(private fb: FormBuilder, private data: ShareService,private newService :CommonService) { }
  ngOnInit(): void {
    //database table
    this.newService.GetUser().subscribe(data =>  this.Repdata = data) 
    
    //choice selection service data
    this.data.shareData.subscribe(x => this.text = x);
    this.choice = parseInt(this.text);
    
    //form row
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
  }

  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      bookingId: [this.bookingNum, Validators.required],
      name: ['test-name', Validators.required],
      email: ['test@gmail.com', [Validators.email, Validators.required]],
      dob: ['2020-06-11T18:30:00.000Z', [Validators.required]],
      bloodGroup: ['A'],
      mobNumber: ['96453423', [Validators.required, Validators.maxLength(10)]],
      isEditable: [true]
    });
  }

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
    
    
  }

  deleteRow(index: number) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
    this.noOfRows = /*this.Repdata.length;*/control.length;
    this.choiceCost = this.choiceCostList[this.choice - 1];
    // this.choiceCost = parseInt(this.choiceData[this.choice -1 ][1]);
    // alert(typeof(this.choiceData[this.choice -1 ][1]) + typeof(this.choiceCost));
    this.calcDiscount();
  }

  toggleTheme() {
    this.mode = !this.mode;
  }

  dummy() {
    alert("you clicked");
  }
  brighter = false;
    popup = false;
    back = false;
    bord = false;

  get myStyles(): any {
    return {
        'display' : this.popup ? 'flex' : 'none',
        // 'color' : this.back ? 'Blue' : 'Black',
        'background-color' : 'rgba(0, 0, 0, 0.7)',
        'border' : this.bord ? '1px solid Red' : ''
        // 'background-color': rgba(0, 0, 0, 0.7);
    };
  }

  address:string;
  name:string;
  id:number;
  email: string; 
      // dob:
      // bloodGroup: ['A'],
  mobNumber: number;

  Repdata;  
  valbutton ="Save";  
       
  onSave = function(user,isValid: boolean) {    
    user.mode= this.valbutton;  
    this.newService.saveUser(user).subscribe(data =>  {  alert(data.data);  
      this.ngOnInit();    
    }, error => this.errorMessage = error )  
      
  }      
  edit = function(kk) {  
    this.id = kk._id;  
    this.name= kk.name;  
    this.email = kk.email;
    this.mobNumber = kk.mobNumber;
    this.address= kk.address;  
    this.valbutton ="Update";  
    alert(this.Repdata.length);
  }  
    
  delete = function(id) {  
    this.newService.deleteUser(id).subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
  }  
  popupInitialization() {
    // const control = this.userTable.get('tableRows') as FormArray;
    // this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    // console.log(this.touchedRows);
    this.noOfRows = this.Repdata.length;
    this.choiceCost = this.choiceCostList[this.choice - 1];
    // this.choiceCost = parseInt(this.choiceData[this.choice -1 ][1]);
    // alert(typeof(this.choiceData[this.choice -1 ][1]) + typeof(this.choiceCost));
    this.calcDiscount();
  }
}

