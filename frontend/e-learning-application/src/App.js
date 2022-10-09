import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";
import AddCourse from "./Components/AddCourse";
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

function App() {
	return (
    <BrowserRouter>
    <Navbar/>
			<Routes>
        <Route path='/' element={<>
            <Sidebar

            />
            <Bar/>
            <AddCourse/>
        </>} />
        
        <Route path='/instructor' element={<>
            
        </>} />

        <Route path='/student' element={<>
          hi student
        </>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;