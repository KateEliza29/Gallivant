import { ChangeDetectorRef, Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Result } from 'src/app/Models/result.model';
import { SearchMapBoxService } from 'src/app/Services/search-map-box.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  public faSearch = faSearch;
  public searchTerm: string = "";
  public results: Result[] = [];

  constructor(private searchMapBoxService: SearchMapBoxService, private changeDetector: ChangeDetectorRef) { }

  public searchBoxKeyUp(event: Event) {
    this.getSearchResults(this.searchTerm);
  }

  private getSearchResults(searchTerm: string) {
    this.searchMapBoxService.getSearchResults(searchTerm)
      .subscribe(result => {
        let jsonString = JSON.stringify(result);
        let jsonObj = JSON.parse(jsonString);
        console.log(jsonObj);
        for (let i = 0; i < 5; i++) {
          console.log(jsonObj.suggestions[i]);
          this.results.push({name: jsonObj.suggestions[i].name, feature_type: jsonObj.suggestions[i].feature_type, mapbox_id: jsonObj.suggestions[i].mapbox_id})
        } 
        this.changeDetector.detectChanges();
      });
  }

  private getClickedResults(mapBoxID: string) {
    this.searchMapBoxService.getClickedResults(mapBoxID)
    .subscribe(result => {
        console.log(result);
    });
  }
}

