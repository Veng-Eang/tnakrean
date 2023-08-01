import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../common/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url=`http://192.168.1.89:8080/api/categories`
  constructor(private http:HttpClient) { }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.url)
  }
}
