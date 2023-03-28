import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.css']
})
export class YoutubeEmbedComponent {

  constructor(private senitizer: DomSanitizer) {}

  safeUrl(key: string) {
    return this.senitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }

  @Input() key: string = ""
  @Input() title: string = ""
}
