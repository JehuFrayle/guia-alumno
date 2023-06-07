import { Component, OnInit } from '@angular/core';
import { faBook, faClock } from '@fortawesome/free-solid-svg-icons';
import { Clase } from 'src/app/models/schedule.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit{
  bookIcon = faBook;
  clockIcon = faClock;

  @Input() clase: Clase = {} as Clase;
  isCurrent = false;
  ngOnInit(): void {
    console.log(this.clase);
    this.isCurrent = this.checkTime(this.clase.hora_inicio, this.clase.hora_fin);
    console.log(this.isCurrent);
  }

  checkTime(start:string, end:string) {
    const now = new Date(); // Obtiene la hora actual
  
    // Convierte el rango de entrada a objetos de fecha
    const startTime = new Date(now.toDateString() + ' ' + start);
    const endTime = new Date(now.toDateString() + ' ' + end);
  
    // Verifica si la hora actual está entre el rango
    if (startTime <= now && now <= endTime) {
      return true;
    } else {
      return false;
    }
  }
  
}
