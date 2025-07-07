import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog';
import { FormDialog } from './form-dialog/form-dialog';
import { Dialog } from './dialog';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private dialog: MatDialog, private dialogService: Dialog) { }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '350px',
      data: { message: 'Are you sure you want to proceed?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User confirmed');
      } else {
        console.log('User cancelled');
      }
    });
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(FormDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form Data:', result);
      }
    });
  }

  showDeleteConfirm(): void {
    this.dialogService.confirm({
      title: 'Delete Item',
      message: 'Are you sure you want to delete this item?',
      confirmText: 'Delete',
      cancelText: 'Keep'
    }).subscribe(result => {
      if (result) {
        console.log('Item deleted');
      } else {
        console.log('Action canceled');
      }
    });
  }
}
