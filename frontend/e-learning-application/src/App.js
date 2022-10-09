import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";
import AddCourse from "./Components/AddCourse";
import Mini from "./Components/MiniBar";
import Add from "./Components/Add";
import Box from "./Components/Box";
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

function App() {
	return (
    <BrowserRouter>
			<Routes>
        <Route path='/course' element={<>
            <Navbar/>
            <Sidebar/>
            <Bar/>
            <AddCourse/>
        </>} />
        
        <Route path='/instructor' element={<>
            <Navbar/>
            <Mini text={'Instructors'}/>
            <Add title={'Instructor'}/>
            <Box/>
        </>} />

        <Route path='/student' element={<>
          <Navbar/> 
          <Mini text={'Students'}/>
          <Add title={'Student'}/>
          <Box/>
        </>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;