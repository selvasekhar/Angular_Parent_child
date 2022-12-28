import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service:MasterService){
    this.listarray=this.service.GetData();
  }

  @Input() namedata:any;
  @Input() markdata:any;
  @Input() statusdata:any;
  @Input() objdata:any;

  @Output() dateupdateEvent = new EventEmitter<string>();
  channelname : any

  listarray=[{"name":"ss", "mark":"100 ", "status":"UI" }]

  updateList(obj:any){
    this.listarray.push(obj);
    return obj.name = "is added";
 }
 ngOnInit() {
  this.channelname=sessionStorage.getItem("name1")!=null?sessionStorage.getItem("name1"):"";
  console.log(this.channelname)
}


}
