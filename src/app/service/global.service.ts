import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  data = 0;

  constructor() { }

  increment() {
    this.data++;
  }
}
