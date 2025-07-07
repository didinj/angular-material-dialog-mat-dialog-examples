import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogData } from './confirm-dialog/confirm-dialog.model';
import { Observable } from 'rxjs';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog';

@Injectable({
  providedIn: 'root'
})
export class Dialog {

  constructor(private dialog: MatDialog) { }

  confirm(data: ConfirmDialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '350px',
      data
    });

    return dialogRef.afterClosed();
  }
}
