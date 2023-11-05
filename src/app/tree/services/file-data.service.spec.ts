import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { nodeData } from '../mock-data/test-data';
import { FileDataService } from './file-data.service';

describe('FileDataService', () => {
  let service: FileDataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FileDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve file data from the API via GET', () => {

    service.getFileData().subscribe(data => {
      expect(data).toEqual(nodeData);
    });

    const req = httpMock.expectOne('../../../assets/data/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(nodeData);
  });

  xit('should refresh the file data', () => {
    service.refreshData();
    // getFileData should now return null
    service.getFileData().subscribe(data => {
      expect(data).toBeNull();
    });
  });
});
