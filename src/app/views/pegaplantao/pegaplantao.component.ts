import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/components/account/account.service';
import { PlantaoService } from 'src/app/components/plantao/plantao.service';
import { UserGetPlantaoBoxComponent } from 'src/app/components/plantao/user-get-plantao-box/user-get-plantao-box.component';

@Component({
  selector: 'app-pegaplantao',
  templateUrl: './pegaplantao.component.html',
  styleUrls: ['./pegaplantao.component.css']
})
export class PegaplantaoComponent implements OnInit {

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
        if (!response.isActive) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['inicio']);
          });
        }
      }
    )
    this.plantaoService.getPegaPlantoes().subscribe(
      (response) => {
        this.plantoes = response
      }
    )
  }

  getPlantao(id: number): void {
    const dialogRef = this.dialog.open(UserGetPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

}
