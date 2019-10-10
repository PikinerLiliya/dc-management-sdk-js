import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';

export class ContentType extends HalResource {
  public id?: string;

  public contentTypeUri: string;
  public settings: object;
}

/**
 * @hidden
 */
export class ContentTypePage extends Page<ContentType> {
  constructor(data?: any) {
    super('content-types', ContentType, data);
  }
}
