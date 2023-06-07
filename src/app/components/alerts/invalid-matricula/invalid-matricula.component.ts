import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invalid-matricula',
  templateUrl: './invalid-matricula.component.html',
  styleUrls: ['./invalid-matricula.component.css']
})
export class InvalidMatriculaComponent {
  closeIcon = faClose;
  constructor(public dialogRef: DialogRef) { }
}
