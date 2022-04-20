import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/components/account/account.service';
import { AdminAttachPlantaoBoxComponent } from 'src/app/components/plantao/admin-attach-plantao-box/admin-attach-plantao-box.component';
import { AdminDeletePlantaoBoxComponent } from 'src/app/components/plantao/admin-delete-plantao-box/admin-delete-plantao-box.component';
import { AdminEditPlantaoBoxComponent } from 'src/app/components/plantao/admin-edit-plantao-box/admin-edit-plantao-box.component';
import { AdminStatusPlantaoBoxComponent } from 'src/app/components/plantao/admin-status-plantao-box/admin-status-plantao-box.component';
import { AdminTaxesPlantaoBoxComponent } from 'src/app/components/plantao/admin-taxes-plantao-box/admin-taxes-plantao-box.component';
import { PlantaoService } from 'src/app/components/plantao/plantao.service';
import { UserAttachPlantaoBoxComponent } from 'src/app/components/plantao/user-attach-plantao-box/user-attach-plantao-box.component';
import { UserDeletePlantaoBoxComponent } from 'src/app/components/plantao/user-delete-plantao-box/user-delete-plantao-box.component';
import { UserNewPlantaoBoxComponent } from 'src/app/components/plantao/user-new-plantao-box/user-new-plantao-box.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-plantao',
  templateUrl: './plantao.component.html',
  styleUrls: ['./plantao.component.css']
})
export class PlantaoComponent implements OnInit {

  interval: any
  plantoes!: any
  values!: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private plantaoService: PlantaoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        if (response.roles.indexOf("ROLE_USER") == -1) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin']);
          });
        }
      }
    )
    this.plantaoService.getPlantoes().subscribe(
      (response) => {
        this.plantoes = response
      }
    )
  }

  newPlantao(): void {
    const dialogRef = this.dialog.open(UserNewPlantaoBoxComponent, {
      width: '35rem',
      disableClose: true
    });
  }

  editPlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminEditPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

  deletePlantao(id: number): void {
    const dialogRef = this.dialog.open(AdminDeletePlantaoBoxComponent, {
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
        id: id
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

  userDeletePlantao(id: number): void {
    const dialogRef = this.dialog.open(UserDeletePlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

  userAttachPlantao(id: number): void {
    const dialogRef = this.dialog.open(UserAttachPlantaoBoxComponent, {
      width: '35%',
      data: {
        id: id
      },
      disableClose: true
    });
  }

}
