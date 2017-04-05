/**
 * Describes a FaaS function's current status.
 */
export interface IFaasStatus {
  /**
   * Unique ID.
   */
  id: string;

  /**
   * Name.
   */
  name: string;

  /**
   * Describes the function's purpose.
   */
  description: string;

  /**
   * 'HEALTHY' if the majority of recent executions of the function exited
   * normally. Else, 'ERROR'.
   */
  state: 'HEALTHY' | 'ERROR';

  /**
   * Total amount of memory allocation across all
   * instances of the function.
   */
  totalMemoryAllocation: number;
}
