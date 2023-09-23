import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Result } from '../Models/result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchMapBoxService {

  constructor(private http: HttpClient) { }

  getSearchResults(searchString: string) {
    return this.http.get<string>("https://api.mapbox.com/search/searchbox/v1/suggest?q=" + searchString + "&access_token=" + environment.mapboxKey);
  }

  getClickedResults(mapboxID: string) {
    return this.http.get<string>("https://api.mapbox.com/search/searchbox/v1/retrieve/" + mapboxID + "?access_token=" + environment.mapboxKey);
  }

  


}
