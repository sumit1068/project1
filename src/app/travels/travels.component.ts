import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent  implements OnInit {
  ngOnInit(): void {
  console.log('TravelsComponent loaded...')
  }

}
