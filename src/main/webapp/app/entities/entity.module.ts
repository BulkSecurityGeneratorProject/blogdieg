import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogdiegBlogModule } from './blog/blog.module';
import { BlogdiegEntryModule } from './entry/entry.module';
import { BlogdiegTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogdiegBlogModule,
        BlogdiegEntryModule,
        BlogdiegTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogdiegEntityModule {}
