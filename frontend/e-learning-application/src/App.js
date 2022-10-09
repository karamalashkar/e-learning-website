import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";

function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <Sidebar/>
      <Bar/>
		</React.Fragment>
	);
}

export default App;