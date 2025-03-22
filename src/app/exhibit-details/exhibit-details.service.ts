import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExhibitDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:8080/api/exhibit' 
  private apiUrlImage = 'http://localhost:8080/api/image'
  private apiUrlThumbnail = 'http://localhost:8080/api/thumbnail'

  public getExhibitData(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  public getImage(id: string): Observable<any> {
    return this.http.get(`${this.apiUrlImage}/${id}`, { responseType: 'blob' })
  }

  public getThumbnail(id: string): Observable<any> {
    return this.http.get(`${this.apiUrlImage}/${id}`, { responseType: 'blob' })
  }
}
