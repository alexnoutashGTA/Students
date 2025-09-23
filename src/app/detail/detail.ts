import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../services/content-service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class Detail implements OnInit{
  private studentId: string | null = "";
  protected detail: any = null;
  detailDeepCopy:any;

  constructor(private route: ActivatedRoute, private service:ContentService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('studentId');
      this.service.getDetail({detailBody:{studentId: this.studentId}}).subscribe(detail => {
        this.detail = detail
        console.log(this.detail);
        /*    Builtin java function to clone an object */
        this.detailDeepCopy= structuredClone(this.detail);
        /*    Builtin java function to delete a member from the object */
        delete this.detailDeepCopy.Address;
        delete this.detailDeepCopy._id;
      })
    });
  }
}
