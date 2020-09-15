import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import PostFilterForm from './components/PostFilterForm';

function App() {
	const [ todoList, setTodoList ] = useState([
		{ id: 1, title: 'I love Easy Frontend! 😍 ' },
		{ id: 2, title: 'We love Easy Frontend! 🥰 ' },
		{ id: 3, title: 'They love Easy Frontend! 🚀 ' }
	]);

	const [ postList, setPostList ] = useState([]);
	const [ pagination, setPagination ] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1
	});

	const [ filters, setFilters ] = useState({
		_limit: 10,
		_page: 1,
		title_like: ''
	});

	useEffect(
		() => {
			async function fetchPostList() {
				try {
					// ...
					const paramString = queryString.stringify(filters);
					// console.log(paramString);
					const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`; // template string
					const response = await fetch(requestUrl);
					const responseJSON = await response.json();
					// console.log(responseJSON);

					const { data, pagination } = responseJSON; // object destructoring
					setPostList(data);
					setPagination(pagination);
				} catch (error) {
					console.log('Failed to fetch post list ' + error.message);
				}
			}

			fetchPostList();
		},
		[ filters ]
	);

	function handlePageChange(newPage) {
		// console.log(newPage);
		setFilters({ ...filters, _page: newPage });
	}

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

	function handleFilterChange(newFilters) {
		console.log(newFilters);
		setFilters({
			...filters,
			_page: 1,
			title_like: newFilters.searchTerm
		});
	}

	return (
		<div className="app">
			<h1>React hooks - PostList</h1>
			{/* <ToDoForm onSubmit={handleTodoFormSubmit} />
			<TodoList todos={todoList} onTodoList={handleTodoClick} /> */}
			<PostFilterForm onSubmit={handleFilterChange} />
			<PostList posts={postList} />
			<Pagination pagination={pagination} onPageChange={handlePageChange} />
		</div>
	);
}

export default App;
