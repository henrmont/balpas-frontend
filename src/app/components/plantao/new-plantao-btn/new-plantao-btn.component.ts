import { NewPlantaoBoxComponent } from './../new-plantao-box/new-plantao-box.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-plantao-btn',
  templateUrl: './new-plantao-btn.component.html',
  styleUrls: ['./new-plantao-btn.component.css']
})
export class NewPlantaoBtnComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  newPlantao(): void {
    const dialogRef = this.dialog.open(NewPlantaoBoxComponent, {
      width: '35rem',
    });
  }

}
