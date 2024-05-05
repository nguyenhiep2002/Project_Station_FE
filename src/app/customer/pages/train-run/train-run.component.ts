import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-train-run',
  templateUrl: './train-run.component.html',
  styleUrl: './train-run.component.scss'
})
export class TrainRunComponent {
  buttonCount: number = 0;
  buttonArray: number[] =[];
  buttonStatus: Array<any> = [];
  selectedItem: any = null;
  buttonSelect :any[] = [];
  idTrain:any;
  totalWagons!: any
  wagonNumbers: any[] = [];
  trainMaster:any =[
    {
      id:"sdfrert",
      name:"LP2",
      timeStart:"2024-04-22",
      countTickets:150,
      onTickets:50,
      totalClassWagons:10
    },
    {
      id:"avrsd23",
      name:"LP10",
      timeStart:"2024-04-22",
      countTickets:120,
      onTickets:50,
      totalClassWagons:8
    },
    {
      id:"avrsd2323423",
      name:"LP13",
      timeStart:"2024-04-22",
      countTickets:120,
      onTickets:50,
      totalClassWagons:9
    },
  ]
  constructor(){
  }

  doiChuyen(total:number,id :string){
    this.totalWagons = total;
    this.idTrain = id;
    this.buttonArray = [];
    this.populateWagonNumbers(id);
  }

  populateWagonNumbers(idTrain:string) {
    this.wagonNumbers = Array.from({ length: this.totalWagons }, (_, index) => index + 1);
    this.wagonNumbers = this.wagonNumbers.map((number, index) => {
      const train = this.trainMaster[index]; // Lấy thông tin chuyến tàu từ trainMaster
      return {
        idTrain:idTrain,
        number: number,
        totalSeats: 60// Giả sử giá là tổng số lớp wagon nhân 100
      };
    });
    this.wagonNumbers.sort((a, b) =>   b.number - a.number);
    this.buttonStatus = [];
  }

  chonToa(item: any) {
    if (!this.selectedItem || this.selectedItem !== item) {
      this.selectedItem = item;
      this.buttonArray = [];
      this.buttonStatus = [];
      if(this.buttonSelect.some(items => items.classWagon === item.number && items.idTrain === item.idTrain))
        {
          const newValues = this.buttonSelect.filter(value => value.classWagon == item.number && value.idTrain == item.idTrain);
          this.buttonStatus.push(...newValues);
        }
    }
    this.buttonCount = item.totalSeats
    this.buttonArray = Array.from({length: this.buttonCount}, (_, index) => index + 1);
  }

  toggleButton(button: number) {
    const buttonIndex = this.buttonStatus.findIndex((item) => item.button === button  );
  if (buttonIndex !== -1) {
    this.buttonStatus.splice(buttonIndex, 1);
  } else {
    this.buttonStatus.push({ button, classWagon: this.selectedItem.number,idTrain:this.idTrain  });
  }
  if(this.buttonStatus.length === 0){
    this.buttonSelect = this.buttonSelect.filter(item => !(item.classWagon === this.selectedItem.number && item.idTrain === this.idTrain));
  }
  if(this.buttonSelect.some(items => items.classWagon === this.selectedItem.number && this.buttonStatus.some(statusItem => items.idTrain === statusItem.idTrain) )){
    this.buttonSelect = this.buttonSelect.filter(item => !this.buttonStatus.some(statusItem => statusItem.classWagon === item.classWagon && item.idTrain === statusItem.idTrain));
    const newValues = this.buttonStatus.filter(value => !this.buttonSelect.includes(value));
    this.buttonSelect.push(...newValues);
    }
    else{
      const newValues = this.buttonStatus.filter(value => !this.buttonSelect.includes(value));
      this.buttonSelect.push(...newValues);
    }
    console.log(this.buttonSelect);

  }
  removeTicket(item:any){
    if(item){
      this.buttonSelect = this.buttonSelect.filter((buttonItem: any) => buttonItem !== item);
      const buttonIndex = this.buttonStatus.findIndex((items) => items.button === item.button );
      if (buttonIndex !== -1) {
        this.buttonStatus.splice(buttonIndex, 1);
      }
    }
  }

  getGridColumn(index: number): string {
    const col = Math.floor(index / 4);
    return `${col + 1} / span 1`;
  }

  getGridRow(index: number): string {
    const row = index % 4;
    return `${row + 1} / span 1`;
  }

  isButtonSelected(button: number): boolean {
    return this.buttonStatus.some((item) => item.button === button);
  }

}
