import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {


  private baseURL = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAUmq-PVXkDiZ2d1pchvBgxvR98tMm8-Fs';
  private playList = 'LL_O0DojjuX93Qlo8CwQTe_g';
  private nextPageToken = '';


  constructor(private http: HttpClient) {



   }




   getVideos() {

    const url = `${this.baseURL}/playlistItems`;

    let params = new HttpParams()
    .append('part', 'snippet')
    .append('maxResults', '10')
    .append('playlistId', this.playList)
    .append('key', this.apiKey );


    if (this.nextPageToken) {
      params = params.append('pageToken', this.nextPageToken);
    }


    return this.http.get(url, {params}).pipe(map((res: any) => {


      this.nextPageToken = res.nextPageToken;
      const videos: any[] = [];
      for ( const video of res.items) {
                        const snippet = video.snippet;
                        videos.push(snippet);
                      }

      return videos;
      console.log(res);
    }));
   }



   getVideosByText(text: string) {
    const url = `${this.baseURL}/search`;



   }
}
