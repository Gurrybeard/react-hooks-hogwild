import {React,useState} from "react";
import Nav from "./Nav";
import Pigs from "./Pigs";
import Filters from "./Filters";

import hogs from "../porkers_data";

function App() {
	//controlled input and filter for greassed pigs
const [filter,setFilter]=useState('');
const handleFilter=(e)=>{
	setFilter(e.target.value);
	console.log(e.target.value);
}
	return (
		<div className="App ui grid container">
			<Nav />
			<Filters handleFilter={handleFilter}></Filters>
			<Pigs isFilter={filter} hogs={hogs}></Pigs>
		</div>
	);
}

export default App;
