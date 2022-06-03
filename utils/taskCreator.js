let id = 0;

export const createTodoTask = (text) => {
  return {
    text,
    id: id++,
    active: true
  }
}