import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesDashboardService {
  private _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  public getArticles(query: any): Observable<any> {
    const options = {
      params: new HttpParams()
      .set('_limit', query.limit || '')
      .set('_start', query.start || '')
    }

    return this._http.get<any>(`${this._apiUrl}/articles`, options)
  }

  public getCount(): Observable<number> {
    return this._http.get<any>(`${this._apiUrl}/articles/count`)
  }
}