import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";
import Card from "./Components/Card";

function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <Sidebar/>
      <Bar/>
      <Card/>
		</React.Fragment>
	);
}

export default App;