/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListPeopleComponent } from './list-people.component';

let component: ListPeopleComponent;
let fixture: ComponentFixture<ListPeopleComponent>;

describe('list-people component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListPeopleComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListPeopleComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});