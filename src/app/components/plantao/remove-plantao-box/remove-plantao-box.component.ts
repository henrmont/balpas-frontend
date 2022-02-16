import {Component, Inject, OnInit} from '@angular/core';
import {Plantao} from "../plantao.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlantaoService} from "../plantao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-remove-plantao-box',
  templateUrl: './remove-plantao-box.component.html',
  styleUrls: ['./remove-plantao-box.component.css']
})
export class RemovePlantaoBoxComponent implements OnInit {

  plantao: Plantao = {
    type: '',
    local: '',
    dinicio: '',
    hinicio: '',
  }

  constructor(
    private dialogRef: MatDialogRef<RemovePlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getById(this.data.id).subscribe(
      (response) => {
        this.plantao.type = response.description
        this.plantao.local = response.local
        this.plantao.dinicio = this.plantao.hinicio = response.inicio
      },
      (err) => {
        this.dialogRef.close()
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  onSubmit(): void {
    this.plantaoService.removePlantao(this.data.id).subscribe(
      (response) => {
        this.plantaoService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
