import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExhibitDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'https://meik-gr3.industrieschule.de/api/exhibit' 
  private apiUrlImage = 'https://meik-gr3.industrieschule.de/api/image'
  private apiUrlThumbnail = 'https://meik-gr3.industrieschule.de/api/thumbnail'

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
