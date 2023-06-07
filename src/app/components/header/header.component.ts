import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private scheduleService: ScheduleService) {}
  ngOnInit(): void {
    this.scheduleService.isLogged.subscribe((logged) => {
      this.isLogged = logged;
    });
  }
  logout() {
    this.scheduleService.removeStudent();
  }
}
