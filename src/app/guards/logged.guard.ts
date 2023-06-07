import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../services/schedule.service';

export const loggedGuard: CanActivateFn = (route, state) => {
  const routerService:Router = inject(Router);
  const scheduleService:ScheduleService = inject(ScheduleService);
  const student = scheduleService.getStudent();

  if (student.id_alumno === undefined) {
    routerService.navigate(['/login']);
    return false;
  }
  return true;
};
