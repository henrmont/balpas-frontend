import {Component, Inject, OnInit} from '@angular/core';
import {Plantao} from "../plantao.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlantaoService} from "../plantao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-attach-plantao-box',
  templateUrl: './attach-plantao-box.component.html',
  styleUrls: ['./attach-plantao-box.component.css']
})
export class AttachPlantaoBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AttachPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getById(this.data.id).subscribe(
      (response) => {
        
      },
      (err) => {
        this.dialogRef.close()
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  onSubmit(): void {
    // this.plantaoService.removePlantao(this.data.id).subscribe(
    //   (response) => {
    //     this.plantaoService.showMessage(response.message)
    //     this.dialogRef.close()
    //   }
    // )
  }

  close(): void {
    this.dialogRef.close()
  }

}
