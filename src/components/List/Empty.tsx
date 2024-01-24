import { ClipboardText } from 'phosphor-react'
import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.content}>
            <div className={styles.clipboard}>
                <ClipboardText size={56}/>
            </div>
            <div className={styles.texts}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}