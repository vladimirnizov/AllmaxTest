export class Task {

    constructor(private _title: string,
        private _description: string,
        private _rate: string,
        private _deadLineDate: Date,
        private _deadLine: string,
        private _finishDay: Date)
        {}

    public get finishDay(): Date {
        return this._finishDay;
    }
    public set finishDay(value: Date) {
        this._finishDay = value;
    }
    public get deadLine(): string {
        return this._deadLine;
    }
    public set deadLine(value: string) {
        this._deadLine = value;
    }
    public get rate(): string {
        return this._rate;
    }
    public set rate(value: string) {
        this._rate = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }
    public get description(): string {
        return this._description;
    }
    public set description(description: string) {
        this._description = description;
    }
       
    public get deadLineDate(): Date {
        return this._deadLineDate;
    }
    public set deadLineDate(value: Date) {
        this._deadLineDate = value;
    }

}