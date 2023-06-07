import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { OnInit } from '@angular/core';
import { Clase, Student } from 'src/app/models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  student: Student = {} as Student;
  clases: Clase[] = [];

  constructor(private scheduleService:ScheduleService) { }

  ngOnInit(): void {
    this.student = this.scheduleService.getStudent();
    this.scheduleService.getTodaySchedule().subscribe((horario) => {
      console.log(horario);
      if(horario[0].dia === undefined) {
        this.clases = [];
        console.log('No hay clases hoy');
        return;
      }
      this.clases = horario;
    });
  }
}
