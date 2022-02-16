import { AttachPlantaoBoxComponent } from './../attach-plantao-box/attach-plantao-box.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {PlantaoService} from "../plantao.service";
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-attach-file',
  templateUrl: './attach-file.component.html',
  styleUrls: ['./attach-file.component.css']
})
export class AttachFileComponent implements OnInit {

  @Input() requiredFileType: string = '';

  fileName = '';

  constructor(
    private dialogRef: MatDialogRef<AttachPlantaoBoxComponent>,
    private plantaoService: PlantaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      this.plantaoService.attachPlantao(formData, this.data.id, this.fileName)
      .subscribe(
        (response) => {
          this.plantaoService.showMessage(response.message)
          this.dialogRef.close()
        }, (err) => {

        }
      )
    }
  }

  ngOnInit(): void {
  }

}
