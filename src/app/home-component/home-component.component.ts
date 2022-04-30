import { Component, OnInit } from '@angular/core';
import { SetServiceService } from 'src/services/set-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private setService: SetServiceService) { }

  ngOnInit(): void {
  }

}
