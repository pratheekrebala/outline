import { JobOptions } from "bull";
import { taskQueue } from "../";

export enum TaskPriority {
  Background = 40,
  Low = 30,
  Normal = 20,
  High = 10,
}

export default abstract class BaseTask<T> {
  /**
   * Schedule this task type to be processed asyncronously by a worker.
   *
   * @param props Properties to be used by the task
   * @returns A promise that resolves once the job is placed on the task queue
   */
  public static schedule<T>(props?: T) {
    // @ts-expect-error cannot create an instance of an abstract class, we wont
    const task = new this();
    return taskQueue.add(
      {
        name: this.name,
        props,
      },
      task.options
    );
  }

  /**
   * Execute the task.
   *
   * @param props Properties to be used by the task
   * @returns A promise that resolves once the task has completed.
   */
  public abstract perform(props: T): Promise<void>;

  /**
   * Job options such as priority and retry strategy, as defined by Bull.
   */
  public get options(): JobOptions {
    return {
      priority: TaskPriority.Normal,
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 60 * 1000,
      },
    };
  }
}
