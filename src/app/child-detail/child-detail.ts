import {Component, Input, OnChanges, signal} from '@angular/core';

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
   buttonState = signal("Edit");

  ngOnChanges() {
    if (this.detail != null) {
    /*    Builtin java functions to extract keys and values from and object */
      this.detailLabel = Object.keys(this.detail);
      this.detailValue = Object.values(this.detail);
    }
  }

  buttonClicked(title:string) {
    this.buttonState.set(title);
    if (title=='Edit'){

    }

  }
}
