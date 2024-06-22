import React, { useEffect, useState } from "react";

import ItemList from "./itemList";

const Home = () => {

	const [itemList, setItemList] = useState("")
	const [list, setList] = useState([])

	async function getList() {
		try {
			const response = await fetch("https://playground.4geeks.com/todo/users/uAngelsalcedo")
			const data = await response.json()
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	function addListItem(e) {

		if (e.key == "Enter") {
			setList([...list, itemList])
			console.log(list);

		}

	}

	function deletItemList(elementToDelete) {
		const newList = list.filter((item) => item !== elementToDelete)
		setList(newList)
	}

	useEffect(() =>{
		getList()
	},[])


	return (
		<div className="text-center container">
			<div className="card">
				<div className="card-header">
					<h1 className="fs-1 opacity-25">Todos</h1>
				</div>
				<input onChange={(event) => setItemList(event.target.value)} onKeyDown={(e) => addListItem(e)} placeholder="Nueva Tarea"></input>
				<ul className="list-group list-group-flush">
					<ItemList delete={deletItemList} list={list} />
				</ul>
			</div>
		</div>
	);
};

export default Home;