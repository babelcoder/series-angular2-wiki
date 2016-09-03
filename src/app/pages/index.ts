// Barrels are not reaching into sub barrels: https://github.com/angular/angular-cli/issues/585
// export * from './page-list';
// export * from './shared';

import { PageListComponent } from './page-list';
import { Page } from './shared'
import { PageService } from './shared/page.service';

export {
  Page,
  PageListComponent,
  PageService
}
