import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';

export class ContentTypeSchema extends HalResource {
  public id?: string;

  public validationLevel: string;
  public body: string;
  public schemaId: string;
  public createdBy?: string;
  public lastModifiedBy?: string;
  public createdDate?: string;
  public lastModifiedDate?: string;
  public version: string;
}

/**
 * @hidden
 */
export class ContentTypeSchemasPage extends Page<ContentTypeSchema> {
  constructor(data?: any) {
    super('content-type-schemas', ContentTypeSchema, data);
  }
}
