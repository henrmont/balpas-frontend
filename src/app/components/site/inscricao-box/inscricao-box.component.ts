import { Router } from '@angular/router';
import { SiteService } from './../site.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscricao-box',
  templateUrl: './inscricao-box.component.html',
  styleUrls: ['./inscricao-box.component.css']
})
export class InscricaoBoxComponent implements OnInit {

  inscricao: any = {
    nome: '',
    email: '',
    telefone: ''
  }

  constructor(
    private dialogRef: MatDialogRef<InscricaoBoxComponent>,
    private siteService: SiteService,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.siteService.registerInscricao(this.inscricao).subscribe(
      (response) => {
        this.siteService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

}
