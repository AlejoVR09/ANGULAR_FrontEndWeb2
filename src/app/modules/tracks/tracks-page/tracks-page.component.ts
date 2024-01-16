import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '@data/track.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  tracksTrending: Array<TrackModel> = []

  ngOnInit(){

    const { data } : any = (dataRaw as any).default
    console.log(data)
    this.tracksTrending = data
  }
}
