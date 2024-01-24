import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { Input } from "./components/Input";
import { Task } from "./components/List/Task";
import { ListHeader } from "./components/List/ListHeader";
import { Empty } from "./components/List/Empty";

export interface ITask {
  id: number;
  content: string;
  isCompleted: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  function countCreatedTasks(): number {
    return tasks.length;
  }

  function countCompletedTask(): number {
    
    if (tasks.length === 0) {
      return 0;
    }

    let count = 0;
    
    for (let i=0; i<tasks.length; i++) {
      if (tasks[i].isCompleted) count++;
    }

    return count;
  }

  function handleDeleteTask(taskToDelete: number) {

    const taskWithouDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(taskWithouDeletedOne);
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      content: inputValue,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleChangeTaskStatus({ id, value}: { id: number; value: boolean}) {

    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isCompleted: value}
      }
      
      return { ...task}
    })

    console.log(updatedTasks)
    
    setTasks(updatedTasks);

  }

  return (
    <>
      <Header />

      <section className={styles.content}>
        <div className={styles.newTaskContainer}>
          <form className={styles.formNewTask} onSubmit={handleAddTask}>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="Adicione uma nova tarefa"
            />

            <button className={styles.botao} type="submit">
              <p>Criar</p>
              <span>
                <PlusCircle color="#F2F2F2" weight="bold" />
              </span>
            </button>
          </form>
        </div>
        <div className={styles.taskListContainer}>
          <ListHeader 
            taskCreatedCount={countCreatedTasks}
            completedTaskCount={countCompletedTask}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task 
                key={task.id}
                data={task}
                onDeleteTask={handleDeleteTask}
                onTaskStatusChange={handleChangeTaskStatus}
              />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </>
  );
}
