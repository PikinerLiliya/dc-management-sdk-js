import { HalResource } from '../hal/models/HalResource';
import {
  ContentRepositoriesPage,
  ContentRepository
} from './ContentRepository';
import { ContentType, ContentTypePage } from './ContentType';
import { ContentTypeSchema, ContentTypeSchemasPage } from './ContentTypeSchema';
import { Event, EventsPage } from './Event';
import { Page } from './Page';
import { Pageable } from './Pageable';
import { Sortable } from './Sortable';
import { Status } from './Status';
import { Workflow, WorkflowPage } from './Workflows';

/**
 * Class representing the [Hub](https://api.amplience.net/v2/content/docs/api/index.html#resources-hubs) resource.
 * Hubs are containers for multiple repositories including media, content, content types.
 */
export class Hub extends HalResource {
  /**
   * Unique id generated on creation
   */
  public id?: string;

  /**
   * Globally unique programmatic name for the Hub
   */
  public name?: string;

  /**
   * Friendly display label for the Hub
   */
  public label?: string;

  /**
   * Textual description of the Hub
   */
  public description?: string;

  /**
   * Lifecycle status of the Hub
   */
  public status?: Status;

  /**
   * Id of the user responsible for originally creating the Hub
   */
  public createdBy?: string;

  /**
   * Timestamp representing when the Hub was originally created in ISO 8601 format
   */
  public createdDate?: string;

  /**
   * Id of the user responsible for the last update to the Hub
   */
  public lastModifiedBy?: string;

  /**
   * Timestamp representing when the Hub was last updated in ISO 8601 format
   */
  public lastModifiedDate?: string;

  /**
   * Resources and actions related to a Hub
   */
  public readonly related = {
    contentRepositories: {
      /**
       * Retrieves a list of Content Repositories associated with this Hub
       * @param options Pagination options
       */
      list: (options?: Pageable & Sortable): Promise<Page<ContentRepository>> =>
        this.fetchLinkedResource(
          'content-repositories',
          options,
          ContentRepositoriesPage
        )
    },
    contentTypeSchemas: {
      /**
       * Creates a Content type schema inside this Hub
       * @param resource
       */
      create: (resource: ContentTypeSchema): Promise<ContentTypeSchema> =>
        this.createLinkedResource(
          'create-content-type-schema',
          {},
          resource,
          ContentTypeSchema
        ),

      /**
       * Retrieves a list of content type schemas associated with this Hub
       * @param options Pagination options
       */
      list: (options?: Pageable & Sortable): Promise<Page<ContentTypeSchema>> =>
        this.fetchLinkedResource(
          'list-content-type-schemas',
          options,
          ContentTypeSchemasPage
        )
    },
    contentTypes: {
      /**
       * Creates a Content type inside this Hub
       * @param resource
       */
      create: (resource: ContentType): Promise<ContentType> =>
        this.createLinkedResource(
          'register-content-type',
          {},
          resource,
          ContentType
        ),

      /**
       * Retrieves a list of content types associated with this Hub
       * @param options Pagination options
       */
      list: (options?: Pageable & Sortable): Promise<Page<ContentType>> =>
        this.fetchLinkedResource('content-types', options, ContentTypePage)
    },
    events: {
      /**
       * Creates an Event inside this Hub
       * @param resource
       */
      create: (resource: Event): Promise<Event> =>
        this.createLinkedResource('create-event', {}, resource, Event),

      /**
       * Retrieves a list of Events associated with this Hub
       * @param options Pagination options
       */
      list: (options?: Pageable & Sortable): Promise<Page<Event>> =>
        this.fetchLinkedResource('events', options, EventsPage)
    },
    'workflow-states': {
      /**
       * Creates a Workflow inside this Hub
       * @param resource
       */
      create: (resource: Workflow): Promise<Workflow> =>
        this.createLinkedResource(
          'create-workflow-state',
          {},
          resource,
          Workflow
        ),

      /**
       * Retrieves a list of Workflows in this Hub
       * @param options Pagination options
       */
      list: (options?: Pageable & Sortable): Promise<Page<Workflow>> =>
        this.fetchLinkedResource('workflow-states', options, WorkflowPage)
    }
  };
}

/**
 * @hidden
 */
export class HubsPage extends Page<Hub> {
  constructor(data?: any) {
    super('hubs', Hub, data);
  }
}
