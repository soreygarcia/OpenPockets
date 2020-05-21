/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditOrganizationComponent } from './edit-organization.component';

let component: EditOrganizationComponent;
let fixture: ComponentFixture<EditOrganizationComponent>;

describe('edit-organization component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditOrganizationComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditOrganizationComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});