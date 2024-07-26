import { useState } from "react";

function TodoList(){

	const [todoList, setTodoList] = useState([]);
	const [todoItem, setTodoItem] = useState('');

	const handleTodoItem = (evt) => {
		const textInput = evt.target.value;
		setTodoItem(textInput);
	}
	const handleAddItem = (evt) => {
		evt.preventDefault();
		setTodoList(prevList => [...prevList, todoItem]);
		setTodoItem('');
	}

	const sentenceCase = (str) => {
		const firstLetter = str.charAt(0).toUpperCase();
		const restSentence = str.slice(1);
		return <>{firstLetter}{restSentence}</>
	}

	const handleDelete = (index) => {
		// filter array method on new array, adds only items which pass the condition.
		const updatedList = todoList.filter((item, i) => i !== index);
		setTodoList(updatedList);
	}

	const handleMoveUp = (index) => {
		if (index > 0){
			const updatedTodoList = [...todoList];
			[updatedTodoList[index], updatedTodoList[index - 1]] = [updatedTodoList[index - 1], updatedTodoList[index]]
			setTodoList(updatedTodoList);
		}
	}
	const handleMoveDown = (index) => {
		if (index < todoList.length -1){
			const updatedTodoList = [...todoList];
			[updatedTodoList[index], updatedTodoList[index + 1]] = [updatedTodoList[index + 1], updatedTodoList[index]]
			setTodoList(updatedTodoList);
		}
	}

	return(
		<div className="todolist">

			{
				todoList.length > 0 ? (
					<ul className="todolist__list">
						{
							todoList.map((item, index) => {
								return(
									<li key={index} className="todolist__item">
										<div className="todolist__item__name">
											{sentenceCase(item)}
										</div>
										<button onClick={() => handleDelete(index)} className="button">Delete</button>
										<button onClick={() => handleMoveUp(index)} className="todolist__item__shift button">⬆</button>
										<button onClick={() => handleMoveDown(index)} className="todolist__item__shift button">⬇ </button>
									</li>
								)
							})
						}
					</ul>
				) : (
					<p>Please add some tasks below 😎 </p>
				)
			}
			
			<form className="todolist__form">
				<input id="input-item" type="text" onChange={handleTodoItem} placeholder="Add item" value={todoItem} />
				<button className="button" id="add-item" onClick={handleAddItem}>Add item</button>
			</form>

		</div>
	)
}

export default TodoList;