import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule, Student, TodaySchedule } from '../models/schedule.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'https://guia-alumno.jehufrayle.com/public/';
  private student: Student = {} as Student;
  public isLogged = new BehaviorSubject<boolean>(false);

  getSchedule() {
    return this.http.get<Schedule>(`${this.baseUrl}schedule/${this.student?.id_alumno}`);
  }
  getTodaySchedule() {
    return this.http.get<TodaySchedule>(`${this.baseUrl}today/${this.student?.id_alumno}`);
  }
  getStudentInfo(matricula: number) {
    return this.http.get<Student[]>(`${this.baseUrl}students/${matricula}`); //return an array with one element
  }

  // localStorage methods
  setStudent(student: Student) {
    localStorage.setItem('student', JSON.stringify(student));
    this.student = student;
    this.isLogged.next(true);
  }
  getStudent(): Student {
    return JSON.parse(localStorage.getItem('student') || '{}');
  }
  removeStudent() {
    localStorage.removeItem('student');
    this.isLogged.next(false);
    window.location.reload();
  }
}
