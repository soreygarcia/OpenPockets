import { Component } from '@angular/core';
import { PersonModel } from '../../shared/models/person.model';
import { PeopleService } from '../../shared/services/people.service'

@Component({
    selector: 'app-list-people',
    templateUrl: './list-people.component.html',
    styleUrls: ['./list-people.component.css']
})
/** list-people component*/
export class ListPeopleComponent {
  /** list-people ctor */
  public people: PersonModel[];

  constructor(private service: PeopleService) {

    service.getPeople().subscribe(result => {
      this.people = result;
    }, error => console.error(error));

  }
}
