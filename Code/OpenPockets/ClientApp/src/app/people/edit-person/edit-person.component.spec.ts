/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditPersonComponent } from './edit-person.component';

let component: EditPersonComponent;
let fixture: ComponentFixture<EditPersonComponent>;

describe('edit-person component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditPersonComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditPersonComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});