import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  token: any

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.token = this.router.snapshot.paramMap.get('token')
  }

}
