/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PageService } from './page.service';

describe('Service: Page', () => {
  beforeEach(() => {
    addProviders([PageService]);
  });

  it('should ...',
    inject([PageService],
      (service: PageService) => {
        expect(service).toBeTruthy();
      }));
});
