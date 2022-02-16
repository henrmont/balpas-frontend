import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {Plantao} from "../plantao.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlantaoService} from "../plantao.service";
import {Router} from "@angular/router";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-eval-plantao-box',
  templateUrl: './eval-plantao-box.component.html',
  styleUrls: ['./eval-plantao-box.component.css']
})
export class EvalPlantaoBoxComponent implements OnInit {

  plantao: Plantao = {
    evalute: 0,
    comment: ''
  }

  constructor(
    private dialogRef: MatDialogRef<EvalPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getById(this.data.id).subscribe(
      (response) => {},
      (err) => {
        this.dialogRef.close()
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  onSubmit(): void {
    this.plantaoService.evalutePlantao(this.data.id, this.plantao).subscribe(
      (response) => {
        this.plantaoService.showMessage(response.message)
        this.dialogRef.close()
      },
      (err) => {
        this.dialogRef.close()
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
