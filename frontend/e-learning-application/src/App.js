import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";
import AddCourse from "./Components/AddCourse";
import Mini from "./Components/MiniBar";
import Add from "./Components/Add";
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

function App() {
	return (
    <BrowserRouter>
    <Navbar/>
			<Routes>
        <Route path='/' element={<>
            <Sidebar/>
            <Bar/>
            <AddCourse/>
        </>} />
        
        <Route path='/instructor' element={<>
            <Mini text={'Instructor'}/>
            <Add title={'Instructor'}/>
        </>} />

        <Route path='/student' element={<>
          <Mini text={'Student'}/>
          <Add title={'Student'}/>
        </>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;