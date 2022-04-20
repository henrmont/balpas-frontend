import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminAttachPlantaoBoxComponent } from 'src/app/components/plantao/admin-attach-plantao-box/admin-attach-plantao-box.component';
import { AdminDeletePlantaoBoxComponent } from 'src/app/components/plantao/admin-delete-plantao-box/admin-delete-plantao-box.component';
import { AdminEditPlantaoBoxComponent } from 'src/app/components/plantao/admin-edit-plantao-box/admin-edit-plantao-box.component';
import { AdminNewPlantaoBoxComponent } from 'src/app/components/plantao/admin-new-plantao-box/admin-new-plantao-box.component';
import { AdminStatusPlantaoBoxComponent } from 'src/app/components/plantao/admin-status-plantao-box/admin-status-plantao-box.component';
import { AdminTaxesPlantaoBoxComponent } from 'src/app/components/plantao/admin-taxes-plantao-box/admin-taxes-plantao-box.component';
import { AdminValidatePlantaoBoxComponent } from 'src/app/components/plantao/admin-validate-plantao-box/admin-validate-plantao-box.component';
import { PlantaoService } from 'src/app/components/plantao/plantao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-plantao',
  templateUrl: './admin-plantao.component.html',
  styleUrls: ['./admin-plantao.component.css'],
})
export class AdminPlantaoComponent implements OnInit {
  
  @Output() isAdmin!: boolean
  plantoes: any

  constructor(
    private dialog: MatDialog,
    private plantaoService: PlantaoService,
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.arouter.data.subscribe(
      (response) => {
        this.isAdmin = response[0].isAdmin
      }
    )
    this.plantaoService.adminGetPlantoes().subscribe(
      (response) => {
        this.plantoes = response
      }
    )
  }

  newPlantao(): void {
    const dialogRef = this.dialog.open(AdminNewPlantaoBoxComponent, {
      width: '35rem',
      disableClose: true
    });
  }

  editPlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminEditPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id,
        isAdmin: this.isAdmin
      },
      disableClose: true
    });
  }

  deletePlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminDeletePlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id,
        isAdmin: this.isAdmin
      },
      disableClose: true
    });
  }

  validatePlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminValidatePlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

  statusPlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminStatusPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id,
        isAdmin: this.isAdmin
      },
      disableClose: true
    });
  }

  taxesPlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminTaxesPlantaoBoxComponent, {
      width: '80%',
      data: {
        id: id
      },
      disableClose: true
    });
  }

  attachPlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminAttachPlantaoBoxComponent, {
      width: '35%',
      data: {
        id: id
      },
      disableClose: true
    });
  }

}
