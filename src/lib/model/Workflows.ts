import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';

/**
 * Class representing the [Workflow](https://api.amplience.net/v2/content/docs/api/index.html#resources-events) resource.
 * An Event represents a major date in the calendar, such as Christmas or Black Friday. An Event may span multiple days and start and end at any given UTC time.
 */
export class Workflow extends HalResource {
  /**
   * Friendly name for the workflow
   */
  public label?: string;

  /**
   * Color of the workflow
   */
  public color?: string;
}

/**
 * @hidden
 */
export class WorkflowPage extends Page<Workflow> {
  constructor(data?: any) {
    super('events', Workflow, data);
  }
}
