import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child-detail',
  standalone: false,
  templateUrl: './child-detail.html',
  styleUrls: ['./child-detail.css', '../assets/theme-button-google.css']
})
export class ChildDetail implements OnChanges  {
  @Input({ required: true }) detail: any;
   detailLabel:any;
   detailValue:any;
  ngOnChanges() {
    console.log(this.detail);
    delete this.detail.Address;
    delete this.detail._id;

    if (this.detail!==undefined) {
      this.detailLabel = Object.keys(this.detail);
      this.detailValue = Object.values(this.detail);
      console.log(this.detailValue);
      console.log(this.detailLabel);
    }
  }

}
