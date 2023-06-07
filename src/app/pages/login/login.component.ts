import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { InvalidMatriculaComponent } from 'src/app/components/alerts/invalid-matricula/invalid-matricula.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private scheduleService:ScheduleService, private router:Router, private dialog:Dialog) { }
  matricula: number | null = null;

  ngOnInit(): void {
    const student = this.scheduleService.getStudent();
    if (student.id_alumno !== undefined) {
      this.router.navigate(['schedule']);
    }
  }

  login() {
    if(this.matricula === null) return;
    this.scheduleService.getStudentInfo(this.matricula).subscribe((data) => {
      if(data[0].id_alumno === undefined) {
        this.openDialog();
        this.matricula = null;
        return;
      };
      this.scheduleService.setStudent(data[0]);
      this.router.navigate(['schedule']);
    });
  }

  changeMatricula(changeEvent: KeyboardEvent) {
    const input = (changeEvent.target as HTMLInputElement).value;
    console.log(input);
    this.matricula = Number(input);
  }
  
  openDialog() {
    this.dialog.open(InvalidMatriculaComponent, {
      minWidth: '250px',
      maxWidth: '40%',
    });
  }
}
