export class Todo {
    _id: string;
    completedDate: Date;
    createdDate: Date;

    constructor(public title: string,
                public completed: boolean,
                public description: string) {}
}
