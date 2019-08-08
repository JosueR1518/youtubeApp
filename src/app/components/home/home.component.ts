import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  videos: any[] = [];
  videoSelected: any;
  constructor(private yts: YoutubeService) { }

  ngOnInit() {


    this.yts.getVideos().subscribe(videos => {
       this.videos = videos;
    });
  }




  verVideo(video: any) {


    this.videoSelected = video;
    $('#exampleModal').modal();

  }


  cerrarVideo( ) {

    $('#exampleModal').modal('hide');
    this.videoSelected = null;
  }


  cargarMas() {

    this.yts.getVideos().subscribe(videos => {
      this.videos.push.apply(this.videos, videos);
   });
  }

}
