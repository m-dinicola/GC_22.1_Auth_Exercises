import { User } from 'oidc-client';
import { AuthorizeService } from './../../api-authorization/authorize.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demoData: {name:string,ID:string}

  constructor(private authorizeService:AuthorizeService) { }

  ngOnInit(): void {
    this.demoData.ID = this.authorizeService.getUser().User.
  }

  
}
