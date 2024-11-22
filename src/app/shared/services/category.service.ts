import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstant } from '../constants/global-const';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { iCategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiURL = GlobalConstant.CATALOG_API_URL;
  constructor(private httpClient: HttpClient) { }

  public getHeaders() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return requestOptions;
  }

  getAll(): Observable<ApiResponse<iCategory[]>> {
    return this.httpClient.get<ApiResponse<iCategory[]>>(this.apiURL, this.getHeaders());
  }
}
