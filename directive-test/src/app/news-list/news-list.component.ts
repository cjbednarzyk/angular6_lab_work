import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  selectedNewsId = 0
  newsItems : News[] = []
  searchText: string

  expandNews(id:number) {
    this.selectedNewsId=id
    return false
  }

  constructor(private newsSvc:NewsService) { }

  ngOnInit() {
    this.newsSvc.getNewsItems().subscribe(response => {
      this.newsItems = response;
    },
    error => {
      alert("Sorry.  There was a problem getting data.")
    })
  }

}
