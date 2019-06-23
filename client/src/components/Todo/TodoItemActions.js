import React from "react";

const TodoItemActions = ({ onSelect, onDelete } ) =>
    <>
        <a onClick={onSelect}>Set complete</a>
        <a onClick={onDelete}>Delete</a>
</>;
export default TodoItemActions;