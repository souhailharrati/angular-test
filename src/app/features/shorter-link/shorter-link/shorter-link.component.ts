import { Component, OnInit } from '@angular/core';
import { ShorterLinkPipe } from 'src/app/shared/pipes/shorter-link.pipe';

@Component({
  selector: 'app-shorter-link',
  templateUrl: './shorter-link.component.html',
  styleUrls: ['./shorter-link.component.scss']
})
export class ShorterLinkComponent implements OnInit {

  link;
  shortLink;

  constructor(private shortlinkPipe: ShorterLinkPipe) { }

  ngOnInit(): void {
  }

  onKey(event) {
    this.link = event.target.value;
    if (this.link) {
      this.shortLink = this.shortlinkPipe.transform(this.link);
    }
  }

  copyShortLink() {
    console.log(this.shortLink);
  }

}
