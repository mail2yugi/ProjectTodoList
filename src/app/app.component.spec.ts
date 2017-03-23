import { AppComponent } from './app.component';

import { TestBed , inject} from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export function main() {

  describe('AppComponent Test', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          AppComponent
        ]
      });
    });
    it('Test - AppComponent Should Define.', inject([AppComponent], (cmp:any) => {
      expect(cmp).toBeDefined()
    }));

  });
}
