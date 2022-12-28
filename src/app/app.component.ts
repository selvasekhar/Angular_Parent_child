import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // service: any;
  constructor(private service:MasterService){
    sessionStorage.setItem("name1","Angular");
  }
  ngOnInit(): void {
  }
  // title = 'Angular_Parent_child';
  @ViewChild(ChildComponent) viewdata !: ChildComponent 
  inputname='';
  inputmark='';
  inputstatus='';
  inputObj={"name":"", "mark":"", "status":""}
  response:any;
  title = 'heading';
  TransferData(name:any, mark:any, status:any){
    // this.inputname=name; 
    // this.inputmark=mark; 
    // this.inputstatus=status;
    this.inputObj={"name":name, "mark":mark, "status":status};
    // this.response= this.viewdata.updateList(this.inputObj)
    this.service.SaveData(this.inputObj);
   }

  UpdateTitle(title:any){
    this.title=title;
    console.log(title)
  }
}
