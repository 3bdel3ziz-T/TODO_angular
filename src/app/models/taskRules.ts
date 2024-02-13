import { Task } from "src/app/types/task";

export class TaskRules implements Task {
  constructor(
    public id: number,
    public txt: string,
    public isCompleted: boolean,
    public date: Date,
  ) { }

}
