import { NgRouterPracticePage } from './app.po';

describe('ng-router-practice App', () => {
  let page: NgRouterPracticePage;

  beforeEach(() => {
    page = new NgRouterPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
