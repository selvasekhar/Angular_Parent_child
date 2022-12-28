import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  listarray = [{"name":"selva", "mark":"", "status":"Programmer" }]

  GetData(){
    return this.listarray
  }

  SaveData(input:any){
    this.listarray.push(input);
    console.log(this.listarray)
  }
}
