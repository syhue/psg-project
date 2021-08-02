import * as moment from "moment";
import { TimeTrackerModel } from "./time-tracker.model";

export class TimeTracker {
    duration!: string;
    exactDuration!: string | null;
    startTime!: string;
    endTime!: string;
    createdTime!: moment.Moment | null;
    id!: string;

    constructor(model: TimeTrackerModel) {
        this.duration = model.duration;
        this.startTime = model.startTime;
        this.endTime = model.endTime;
        this.createdTime = model.createdTime ? moment(model.createdTime) : null;
        const seconds = model.startTime && model.endTime ? (parseInt(moment(model.endTime).format('ss'))-parseInt(moment(model.startTime).format('ss')))<0 ? (parseInt(moment(model.endTime).format('ss'))-parseInt(moment(model.startTime).format('ss'))) + 60: (parseInt(moment(model.endTime).format('ss'))-parseInt(moment(model.startTime).format('ss'))): null;
        const minutes = model.startTime && model.endTime ? (parseInt(moment(model.endTime).format('ss'))-parseInt(moment(model.startTime).format('ss')))<0 ? parseInt(moment(model.endTime).format('mm'))-parseInt(moment(model.startTime).format('mm'))-1 : parseInt(moment(model.endTime).format('mm'))-parseInt(moment(model.startTime).format('mm')) : null;
        this.exactDuration = model.startTime && model.endTime ? `${minutes} mins ${seconds} s` : null;
        this.id = model.id;
    }
}