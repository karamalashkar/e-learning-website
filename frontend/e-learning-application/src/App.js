import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Bar from "./Components/Bar";
import Mini from "./Components/MiniBar";
import Add from "./Components/Add";
import Box from "./Components/Box";
import Landing from "./Components/Landing";
import Nav from './Components/Nav';
import AddAssignment from './Components/AddAssignment';
import AddAnnoucement from './Components/AddAnnoucement';
import AssignmentCard from './Components/AssignmentCard';
import AnnoucementCard from './Components/AnnoucementCard';
import Card from './Components/Card';
import SubmitAssignment from './Components/SubmitAssignment';

function App() {

	return (
    <BrowserRouter>
			<Routes>
      <Route path='/' element={<>
          <Landing/>
      </>} />

        <Route path='/course' element={<>
            <Navbar/>
            <Sidebar text={'Unassigned Courses'}/>
            <Bar/>
        </>} />
        
        <Route path='/instructor' element={<>
            <Navbar/>
            <Add title={'Instructor'}/>
            <Mini text={'Instructors'}/>
        </>} />

        <Route path='/student' element={<>
          <Navbar/> 
          <Add title={'Student'}/>
          <Mini text={'Students'}/>
        </>} />

        <Route path='/instructor_home' element={<>
          <Nav link={'instructor_home'} link1={'instructor_assignment'} link2={'instructor_annoucement'}/>
          <Sidebar text={'Unenrolled Students'}/>
          <Mini text={'Home'}/>
          <Box/>
        </>} />

        <Route path='/instructor_assignment' element={<>
          <Nav link={'instructor_home'} link1={'instructor_assignment'} link2={'instructor_annoucement'}/>
          <AddAssignment title={'Assignment'}/>
          <Mini text={'Assignments'}/>
          <AssignmentCard/>            
        </>} />

        <Route path='/instructor_annoucement' element={<>
          <Nav link={'instructor_home'} link1={'instructor_assignment'} link2={'instructor_annoucement'}/>
          <AddAnnoucement/>
          <Mini text={'Announcements'}/>
          <AnnoucementCard/>
        </>} />

        <Route path='/student_home' element={<>
          <Nav link={'student_home'} link1={'student_assignment'} link2={'student_annoucement'}/>
          <Card/>
        </>} />

        <Route path='/student_assignment' element={<>
          <Nav link={'student_home'} link1={'student_assignment'} link2={'student_annoucement'}/>
          <SubmitAssignment/>
          <Mini text={'Assignments'}/>
          <AssignmentCard/>
        </>} />

        <Route path='/student_annoucement' element={<>
          <Nav link={'student_home'} link1={'student_assignment'} link2={'student_annoucement'}/>
          <Mini text={'Annoucements'}/>
          <Box/>
        </>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;