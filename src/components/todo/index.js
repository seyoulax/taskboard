import { useState, useEffect } from "react"

import "./index.css"

import { ModalWindowTodo } from "./modal-window"

export function ToDo() {
    const [isModal, setIsModal] = useState(false)
    const changeIsModal = () => setIsModal(true)
    return (
        <>
            <section className="board-column">
                <div className="column-title">
                        <span>ToDo tasks</span>
                </div>
                <div className="column-tasks">
                        <article className="tasks-wrapper" onClick={changeIsModal}>
                            <div>
                                <span>1 task</span>
                                <div>
                                    <div className="icon-pinned-user"></div><strong>Danis</strong>
                                </div>
                            </div>
                        </article>
                </div>
            </section>
            { isModal ? <ModalWindowTodo setIsModal={setIsModal} /> : null}
        </>
    )
}

