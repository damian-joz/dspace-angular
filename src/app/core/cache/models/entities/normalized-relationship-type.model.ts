import { autoserialize, autoserializeAs, inheritSerialization } from 'cerialize';
import { RelationshipType } from '../../../shared/entities/relationship-type.model';
import { ResourceType } from '../../../shared/resource-type';
import { mapsTo, relationship } from '../../builders/build-decorators';
import { NormalizedDSpaceObject } from '../normalized-dspace-object.model';
import { NormalizedObject } from '../normalized-object.model';
import { IDToUUIDSerializer } from '../../id-to-uuid-serializer';

/**
 * Normalized model class for a DSpace RelationshipType
 */
@mapsTo(RelationshipType)
@inheritSerialization(NormalizedDSpaceObject)
export class NormalizedRelationshipType extends NormalizedObject {

  /**
   * The identifier of this RelationshipType
   */
  @autoserialize
  id: string;

  /**
   * The label that describes the Relation to the left of this RelationshipType
   */
  @autoserialize
  leftLabel: string;

  @autoserialize
  leftMaxCardinality: number;

  @autoserialize
  leftMinCardinality: number;

  /**
   * The label that describes the Relation to the right of this RelationshipType
   */
  @autoserialize
  rightLabel: string;

  @autoserialize
  rightMaxCardinality: number;

  @autoserialize
  rightMinCardinality: number;

  /**
   * The type of Entity found to the left of this RelationshipType
   */
  @autoserialize
  @relationship(ResourceType.EntityType, false)
  leftType: string;

  /**
   * The type of Entity found to the right of this RelationshipType
   */
  @autoserialize
  @relationship(ResourceType.EntityType, false)
  rightType: string;

  /**
   * The universally unique identifier of this RelationshipType
   */
  @autoserializeAs(new IDToUUIDSerializer(ResourceType.RelationshipType), 'id')
  uuid: string;
}
