import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../services/content-service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit{
  private studentId: string | null = "";

  constructor(private route: ActivatedRoute, private service:ContentService) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('studentId');
      this.service.getDetail({detailBody:{studentId: this.studentId}}).subscribe(detail => {
        console.log(detail);
      })
      console.log(this.studentId);
    });
  }
}
