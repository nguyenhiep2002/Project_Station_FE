import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  validateForm: FormGroup;
  selectedValueS:any = {};
  selectedValueE:any = {};
  items =[
    {
      id:"1",
      name:"ahihi"
    },
    {
      id:"2",
      name:"ádas"
    },
    {
      id:"3",
      name:"ểtrt"
    },
    {
      id:"4",
      name:"fghfgh"
    },
    {
      id:"5",
      name:"ôiioi"
    },
  ]

  constructor(private fb: FormBuilder,private router: Router) {
    this.validateForm = this.fb.group({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl({ value: null, disabled: true },[Validators.required,this.dateEndAfterStartValidator()] ),
      radioValue: new FormControl('0'),
      stationStart:new FormControl('', [Validators.required]),
      stationEnd:new FormControl('', [Validators.required])
    });

    this.validateForm.get('radioValue')?.valueChanges.subscribe((value) => {
      const dateEndControl = this.validateForm.get('dateEnd');
      if (value == 1) {
        dateEndControl?.enable();
      } else {
        dateEndControl?.disable();
      }
    });
  }

  submitForm(): void {
    const formValue = this.validateForm.value;
    // Chuyển đổi ngày tháng từ định dạng JavaScript sang chuỗi ISO 8601
    formValue.dateStart = formValue.dateStart ? new Date(formValue.dateStart).toISOString().slice(0, 10) : null;
    formValue.dateEnd = formValue.dateEnd ? new Date(formValue.dateEnd).toISOString().slice(0, 10) : null;

      if(formValue.stationStart === formValue.stationEnd ){
        console.log(" trùng ga đi và ga đến rồi này")
      }else{
        console.log(formValue);
        this.router.navigate(['/train-run']);
      }
  }

  dateEndAfterStartValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const dateStart = this.validateForm.get('dateStart')?.value;
      const dateEnd = control.value;

      if (dateStart && dateEnd && dateStart > dateEnd) {
        return { 'dateEndAfterStart': true };
      }

      return null;
    };
  }
}
