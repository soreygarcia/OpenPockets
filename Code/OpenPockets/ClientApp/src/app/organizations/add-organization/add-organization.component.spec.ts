/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddOrganizationComponent } from './add-organization.component';

let component: AddOrganizationComponent;
let fixture: ComponentFixture<AddOrganizationComponent>;

describe('add-organization component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddOrganizationComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddOrganizationComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});