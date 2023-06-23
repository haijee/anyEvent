declare class Events {
    private _events;
    constructor();
    on(type: string, callback: Function): void;
    emit(type: string, ...args: any[]): void;
    off(type: string, callback: Function): void;
}
export default Events;
