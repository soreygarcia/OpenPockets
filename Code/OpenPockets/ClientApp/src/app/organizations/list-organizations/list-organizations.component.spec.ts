/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListOrganizationsComponent } from './list-organizations.component';

let component: ListOrganizationsComponent;
let fixture: ComponentFixture<ListOrganizationsComponent>;

describe('list-organizations component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListOrganizationsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListOrganizationsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});