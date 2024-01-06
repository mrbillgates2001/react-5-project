import React, { Component } from "react";

class Listing extends Component {
	render() {
		return (
			<div>
				<table className="table striped hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Group</th>
							<th>Does work?</th>
							<th className="ms-16">Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* {todos.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								deleteTodo={deleteTodo}
								editTodoSend={editTodoSend}
							/>
						))} */}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Listing;
