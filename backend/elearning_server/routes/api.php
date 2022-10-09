<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;

Route::group(['prefix'=>"v1"],function(){
    Route::post('/add_course',[CourseController::class,'addCourse']);
    Route::post('/assign_instructor',[CourseController::class,'assignInstructor']);
    Route::get('/unassigned_course/{major}',[CourseController::class,'getUnassignedCourses']);
    Route::get('/assigned_course/{major}',[CourseController::class,'getAssignedCourses']);
    Route::post('/enroll_student',[InstructorController::class,'enrollStudent']);
    Route::post('/add_assignment',[InstructorController::class,'addAssignment']);
    Route::post('/add_annoucement',[InstructorController::class,'addAnnoucement']);
    Route::get('/instructors/{major}',[InstructorController::class,'getAllInstructors']);
    Route::post('/submit_assignment',[StudentController::class,'submitAssignment']);
    Route::get('/students/{major}',[StudentController::class,'getAllStudents']);
    Route::post('/add',[UserController::class,'addUser']);
});


