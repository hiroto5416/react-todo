import { FormEvent, useState } from "react";
import "./App.css";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

function App() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  /**
   * 追加
   * @param e
   * @returns
   */
  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      alert("タスクを入力してください");
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTodo]);
    setText("");
  };

  /**
   * 削除
   * @param id
   */
  const handleDelete = (id: string) => {
    const deleteText = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(deleteText);
  };

  const hancleChange = (completed: boolean) => {
    
  }

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          addTask(e);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="タスクを入力してださい"
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" onChange={()=>hancleChange(task.completed)} />
            {task.text}
            {task.completed ? `完了` : "未完了"}
            <button onClick={() => handleDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
