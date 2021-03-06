import React, { useState, useContext, useEffect } from 'react';

const Layout = (props) => {

		useEffect(_=>{
			console.log("React Component is mounting..", props);

		}, []);

	return (
		<div>
			<hr/>
			<h1>React TO-DO</h1>
			<ul>{props.todos.map((todo,key)=>{
				return <li key={key} onClick={ (event) => {
									this.props.markComplete(todo)
								}
							} className={["list-item", todo.done === true? "done-true":"done-false"].join(" ")}>{todo.text}
							</li>})
			}</ul>
			<button id="click" onClick={ 
					_ => {
					props.newItem(`State update from React added New Todo ${new Date().toDateString()}` );
					}
				}>Add a Todo from React</button>
		</div>
	);
 
}

export default Layout;