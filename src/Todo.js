function Todo(props){
    return(
        <div>
            <h2 style={{ color: props.todo.done ? "green" : "red" }} >{props.todo.name}</h2>
        </div>
    )
}
export default Todo