import { SeriesAngular2WikiPage } from './app.po';

describe('series-angular2-wiki App', function() {
  let page: SeriesAngular2WikiPage;

  beforeEach(() => {
    page = new SeriesAngular2WikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
