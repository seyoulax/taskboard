
import "./index.css"

export function ModalWindowTodo(props) { 
    const setIsModal = props.setIsModal
    return (
        <div className="modal-wrapper">
            <section className="modal-todo">
                <div>
                    <b onClick={setIsModal(false)}>x</b>
                </div>
                <form>
                    <div className="modal-title">
                        <span>Title</span>
                        <input type="text" name="title" placeholder="type smt ..."/>
                    </div>
                    <div className="modal-desc">
                        <span>Description</span>
                        <input type="text" name="title" placeholder="type smt ..."/>
                    </div>
                    <div className="modal-deadline">
                        <span>Deadline <b>you`ll receive the message with reminder</b></span>
                        <input type="datetime-local" name="deadline"/>
                    </div>
                    <div className="modal-desc">
                        <input type="submit" value="ready"/>
                    </div>
                </form>
            </section>
        </div>
    )
}
