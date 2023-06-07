import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ScheduleService } from './services/schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService, private scheduleService: ScheduleService) {
  }
  ngOnInit(): void {
    const theme = this.themeService.getTheme();
    if (theme) {
      this.themeService.setTheme(theme);
    }
    // 
    const student = this.scheduleService.getStudent();
    if (student.id_alumno !== undefined) {
      this.scheduleService.setStudent(student);
    }
  } 
}
