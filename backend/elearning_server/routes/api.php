<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;

Route::group(['prefix'=>"v1"],function(){
    Route::post('/add_course',[CourseController::class,'addCourse']);
    Route::post('/add',[UserController::class,'addUser']);
});



