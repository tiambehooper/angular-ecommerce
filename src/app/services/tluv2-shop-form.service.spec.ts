import { TestBed } from '@angular/core/testing';

import { TLuv2ShopFormService } from './tluv2-shop-form.service';

describe('TLuv2ShopFormService', () => {
  let service: TLuv2ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TLuv2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
