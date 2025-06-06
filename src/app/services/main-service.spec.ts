import { TestBed } from '@angular/core/testing';

import { MainService } from './main-service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('images array should not be empty', () => {
    expect(service.ImagesLinks.length).toBe(10);
  });
  it('images array last item should contain 10', () => {
    expect(service.ImagesLinks[9]).toContain("10");
  });
});
