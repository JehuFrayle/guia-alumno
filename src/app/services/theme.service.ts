import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  getTheme() {
    return localStorage.getItem('theme');
  }
  setTheme(theme: string) {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
    
    localStorage.setItem('theme', theme);
  }
}
