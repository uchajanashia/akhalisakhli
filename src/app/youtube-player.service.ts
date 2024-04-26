import { Injectable } from '@angular/core';

declare var YT: any; 

@Injectable({
  providedIn: 'root'
})
export class YoutubePlayerService {
  private player: any; 
  private videoId="" 

  constructor() { }

  loadPlayer(videoId: string) {
  
    const container =  document.getElementById('youtube-container');
    if(container){
    container.style.marginBottom = '20px'; 
    container.style.marginLeft = 'auto'; 
    container.style.marginRight = 'auto';
    container.style.maxWidth = '100%'

  }

    this.videoId = videoId;
    this.player = new YT.Player(container, {
      videoId: this.videoId,
      playerVars: {
        autoplay: 1 
      },
      events: {
        'onReady': this.onPlayerReady.bind(this),
      }
      
    });
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }
  stopVideo() {
    if (this.player && this.player.stopVideo) {
      this.player.stopVideo(); 
    }
  }
  hidePlayer() {
    if (this.player && this.player.pauseVideo) {
      this.player.pauseVideo();
    }
    const playerElement = document.getElementById('youtube-container');
    if (playerElement) {
      playerElement.style.display = 'none';
    }
  }

  showPlayer() {
    const playerElement = document.getElementById('youtube-container');
    if (playerElement) {
      playerElement.style.display = 'block';
    }
  }
}
