import { Component, OnInit } from '@angular/core';
// Barrels are not reaching into sub barrels: https://github.com/angular/angular-cli/issues/585
// import { Page, PageService } from '..'
import { Page, PageService } from '../shared'

@Component({
  selector: 'app-page-list',
  templateUrl: 'page-list.component.html',
  styleUrls: ['page-list.component.scss']
})
export class PageListComponent implements OnInit {
  pages: Page[];

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.pages = this.pageService.getPages();
  }

}
