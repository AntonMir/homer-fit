import { ObjectId } from 'mongoose';

/**
 * ### Тренировка.
 * #### Включает в себя:
 * - <b>name: string</b> > название
 * - <b>exercises: ObjectId[]</b> > список id упражнений
 */
export interface ITraining {
    _id?: ObjectId;
    name?: string;
    exercises?: ObjectId[];
}
