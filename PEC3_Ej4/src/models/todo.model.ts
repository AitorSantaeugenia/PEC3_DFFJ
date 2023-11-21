/**
 * @class Model
 *
 * Manages the data of the application.
 */

class Todo {
  id:string;
  text:string;
  complete:boolean;
  
  constructor(todo: { text:string, complete:boolean }) {
    this.id = this.uuidv4();
    this.text = todo.text;
    this.complete = todo.complete;
  }

  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 15) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
