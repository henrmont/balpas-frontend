import { MatDialog } from '@angular/material/dialog';
import { SiteService } from './../../components/site/site.service';
import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { InscricaoBoxComponent } from 'src/app/components/site/inscricao-box/inscricao-box.component';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor(
    private siteService: SiteService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  inscricao(): void {
    const dialogRef = this.dialog.open(InscricaoBoxComponent, {
      width: '35rem',
    });
  }

}
