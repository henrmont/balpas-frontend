import { ControlValueAccessor } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  showMessage(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack'
    })
  }
}
