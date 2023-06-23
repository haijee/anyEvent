class Events {
  private _events: any;
  constructor() {
    this._events = Object.create(null);
  }
  on(type: string, callback: Function) {
    (this._events[type] || (this._events[type] = [])).push(callback);
  }
  emit(type: string, ...args: any[]) {
    (this._events[type] || [])
      .slice()
      .forEach((handler: (...args: any[]) => void) => {
        handler(...args);
      });
  }
  off(type: string, callback: Function) {
    if (this._events[type]) {
      const index = this._events[type].indexOf(callback);
      if (index > -1) {
        this._events[type].splice(index, 1);
      }
    }
  }
}

export default Events;
