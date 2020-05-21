/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddPersonComponent } from './add-person.component';

let component: AddPersonComponent;
let fixture: ComponentFixture<AddPersonComponent>;

describe('add-person component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddPersonComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddPersonComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});