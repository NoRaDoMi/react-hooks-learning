import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
	todos: PropTypes.array,
	onTodoList: PropTypes.func
};

TodoList.defaultProps = {
	todos: [],
	onTodoList: null
};

function TodoList(props) {
	// Object destructoring
	const { todos, onTodoList } = props;

	function handlClick(todo) {
		if (onTodoList) {
			onTodoList(todo);
		}
	}

	return (
		<ul className="todoList">
			{todos.map((todo) => (
				<li key={todo.id} onClick={() => handlClick(todo)}>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
