import { HalResource } from '../hal/models/HalResource';
import { Page } from './Page';

/**
 * Class representing the [Workflow](https://api.amplience.net/v2/content/docs/api/index.html#resources-events) resource.
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
    super('workflow-states', Workflow, data);
  }
}
