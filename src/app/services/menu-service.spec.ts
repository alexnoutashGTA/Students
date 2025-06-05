import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu-service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Home label should be Home', () => {
    expect(service.HomeLabel).toEqual("Back Home");
  });
  it('Home label should be Go to Messages', () => {
    expect(service.MessageLabel).toEqual("Go to Messages");
  });
});
