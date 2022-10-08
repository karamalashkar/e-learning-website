<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\InstructorController;

Route::group(['prefix'=>"v1"],function(){
    Route::post('/add_course',[CourseController::class,'addCourse']);
    Route::post('/assign_instructor',[CourseController::class,'assignInstructor']);
    Route::post('/enroll_student',[InstructorController::class,'enrollStudent']);
    Route::post('/add_assignment',[InstructorController::class,'addAssignment']);
    Route::post('/add_annoucement',[InstructorController::class,'addAnnoucement']);
    Route::post('/add',[UserController::class,'addUser']);
});



