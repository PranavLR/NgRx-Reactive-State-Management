import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  public set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving To Local Storage: ', error);
    }
  }

  
  public get(key: string) : unknown {
    try {
      const localStorageItem = localStorage.getItem(key);
      return localStorageItem ? JSON.parse(localStorageItem) : null;
    } catch (error) {
      console.error('Error getting from Local Storage: ', error);
      return null;
    }
  }
  

}
