import uuid from "react-uuid";

class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = uuid();
    this.text = text;
  }
}

export default Todo;
