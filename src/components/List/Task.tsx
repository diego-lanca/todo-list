import styles from './Task.module.css'
import {Trash, Check} from 'phosphor-react'
import { ITask } from '../../App'

interface TaskProps {
    data: ITask
    onDeleteTask: (id: number) => void;
    onTaskStatusChange: ({id, value}: { id: number; value: boolean }) => void;
}

export function Task({data, onDeleteTask, onTaskStatusChange}: TaskProps) {

    const isCheckedStyle = data.isCompleted 
    ? styles['taskCompleted'] 
    : styles['taskNotCompleted'] 

    const pCheckedStyle = data.isCompleted
    ? styles['paragraphChecked']
    : ''

    function handleDeleteTask(): void {
        onDeleteTask(data.id);
    }

    function changeTaskStatus() {
        onTaskStatusChange({id: data.id, value: !data.isCompleted})
    }


    return(
        <div className={styles.content}>
            <div>
                <label htmlFor="checkbox">
                    <input readOnly type="checkbox" checked={data.isCompleted}/>
                    <span className={`${styles.checkbox} ${isCheckedStyle}`} onClick={changeTaskStatus}>
                        {data.isCompleted && <Check size={12} />}
                    </span>
                </label>
            </div>
            <div className={`${styles.conteudo} ${pCheckedStyle}`}>
                <p>{data.content}</p>
            </div>
            <button onClick={handleDeleteTask} className={styles.deleteTask}> <Trash size={17.45}/> </button>
        </div>
    );
}