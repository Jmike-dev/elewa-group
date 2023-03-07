import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { LayoutModule } from '@elewa-group/elements/layout';

@NgModule({
  imports: [CommonModule, LayoutModule, ContactRoutingModule],
  declarations: [ContactPageComponent, ContactFormComponent],
})
export class ContactPageModule {}
