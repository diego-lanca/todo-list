import styles from './ListHeader.module.css'

interface HeaderProps {
  taskCreatedCount: () => number;
  completedTaskCount: () => number;
}

export function ListHeader({taskCreatedCount, completedTaskCount}: HeaderProps) {

  function createdTasks(): number {
    return taskCreatedCount();
  }

  function completedTasks(): number {
    return completedTaskCount();
  }

  const taskCount = createdTasks();
  const completedCount = completedTasks();

  return (
    <header className={styles.header}>
      <div className={styles.created}>
        <p>Tarefas Criadas</p>
        <span>{taskCount}</span>
      </div>
      <div className={styles.finished}>
        <p>Concluidas</p>
        <span>{completedCount} de {taskCount}</span>
      </div>
    </header>
  );
}
