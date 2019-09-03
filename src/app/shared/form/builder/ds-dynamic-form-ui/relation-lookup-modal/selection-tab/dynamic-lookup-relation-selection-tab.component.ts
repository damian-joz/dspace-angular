import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SEARCH_CONFIG_SERVICE } from '../../../../../../+my-dspace-page/my-dspace-page.component';
import { SearchConfigurationService } from '../../../../../../core/shared/search/search-configuration.service';
import { Observable } from 'rxjs';
import { RelationshipOptions } from '../../../models/relationship-options.model';
import { ListableObject } from '../../../../../object-collection/shared/listable-object.model';

@Component({
  selector: 'ds-dynamic-lookup-relation-selection-tab',
  styleUrls: ['./dynamic-lookup-relation-selection-tab.component.scss'],
  templateUrl: './dynamic-lookup-relation-selection-tab.component.html',
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService
    }
  ]
})

export class DsDynamicLookupRelationSelectionTabComponent {
  @Input() label: string;
  @Input() relationship: RelationshipOptions;
  @Input() listId: string;
  @Input() itemRD$;
  @Input() repeatable: boolean;
  @Input() selection$: Observable<ListableObject[]>;

  constructor(

  ) {
  }

}