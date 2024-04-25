import { Component } from '@angular/core';
import { EntryUtil } from '../util/entry.util';
import { Entry } from '../models/entry.model';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [],
  templateUrl: './search-view.component.html',
  styleUrl: './search-view.component.css'
})
export class SearchViewComponent {
  title = 'CN-Consult Angular Praxisaufgabe';
  public entryStore: Entry[] = EntryUtil.createEntryStore();
}
