import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map} from 'rxjs'
import { Course } from '../common/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url=`http://192.168.1.89:8080/api/courses`;
  constructor(private http:HttpClient) { }

  getCourseById(id:number):Observable<Course>{
    const findCourseByIdUrl=`${this.url}/${id}`;
    return this.http.get<Course>(findCourseByIdUrl);
  }
  getAllCourse():Observable<Course[]>{
    return this.http.get<GetResponse>(this.url).pipe(
      map(res=>res.content)
    );
  }
  getCoursesByCategoryPagination(categoryId:number,
                                  pageNumber:number,
                                  pageSize:number):Observable<GetResponse>{
    const searchCoursesByCategoryUrl=`${this.url}?category=${categoryId}&page=${pageNumber}&size=${pageSize}`
    return this.http.get<GetResponse>(searchCoursesByCategoryUrl);
  }
}
interface GetResponse{
  content:Course[],
  pagination: {
    pageSize : number,
    pageNumber: number,
    totalPages: number,
    totalElements: number,
    numberOfElements: number,
    first: boolean,
    last: boolean,
    empty: boolean
  }
}
