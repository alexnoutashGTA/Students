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
    expect(service.ImagesLinks.length).toBe(15);
  });
  it('images array last item should contain 10', () => {
    expect(service.ImagesLinks[10]).toContain("10");
  });
  it('just testing string functions', () => {
    let firstImageLink = service.ImagesLinks[0];
    if (firstImageLink.endsWith("jpg")){
      firstImageLink.replace("jpg","png");
    }
    console.log(`testing string functions ${firstImageLink}`);
    //expect(firstImageLink.endsWith("png")).toEqual(true)
  });
  it('just testing string functions', () => {
    let firstImageLink = service.ImagesLinks[3];
    let ind = firstImageLink.lastIndexOf("women");
    expect(ind).toBe(36);
  });
});
