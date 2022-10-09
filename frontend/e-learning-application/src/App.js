import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";
import AddCourse from "./Components/AddCourse";

function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <Sidebar/>
      <Bar/>
      <AddCourse/>
		</React.Fragment>
	);
}

export default App;