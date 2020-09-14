import React, { useState, useEffect } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import PostList from './components/PostList';

function App() {
	const [ todoList, setTodoList ] = useState([
		{ id: 1, title: 'I love Easy Frontend! 😍 ' },
		{ id: 2, title: 'We love Easy Frontend! 🥰 ' },
		{ id: 3, title: 'They love Easy Frontend! 🚀 ' }
	]);

	const [ postList, setPostList ] = useState([]);

	useEffect(() => {
		async function fetchPostList() {
			// ...
			const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
			const response = await fetch(requestUrl);
			const responseJSON = await response.json();
			console.log(responseJSON);

			const { data } = responseJSON; // object destructoring
			setPostList(data);
		}

		fetchPostList();
	}, []);

	function handleTodoClick(todo) {
		console.log(todo);
		const index = todoList.findIndex((x) => x.id === todo.id);
		if (index < 0) return;

		const newTodoList = [ ...todoList ];
		newTodoList.splice(index, 1); // delete 1 item in index
		setTodoList(newTodoList);
	}

	function handleTodoFormSubmit(formValues) {
		console.log(formValues);
		const newTodo = {
			id: todoList.length + 1,
			...formValues // get all keys in formValues
		};
		const newTodoList = [ ...todoList ];
		newTodoList.push(newTodo);
		setTodoList(newTodoList);
	}

	return (
		<div className="app">
			<h1>React hooks - TodoList</h1>
			{/* <ToDoForm onSubmit={handleTodoFormSubmit} />
			<TodoList todos={todoList} onTodoList={handleTodoClick} /> */}
			<PostList posts={postList} />
		</div>
	);
}

export default App;
