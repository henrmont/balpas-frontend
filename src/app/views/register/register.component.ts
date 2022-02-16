import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  token: any

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.token = this.router.snapshot.paramMap.get('token')
  }

}
