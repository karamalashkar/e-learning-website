<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller{
    //add new course
    function addCourse(Request $request){
        $check_course=Course::where('code','=',$request->code)->first();

        if(!$check_course){
            $course= new Course;
            
            $base64Image = explode(";base64,", $request->image);
            $explodeImage = explode("image/", $base64Image[0]);
            $imageType = $explodeImage[1];
            $image_base64 = base64_decode($base64Image[1]);
            $imageName = $request->code.'.'.'png';
            \File::put(public_path(). '/images/' . $imageName, base64_decode($base64Image[1]));

            $course->code=$request->code;
            $course->name=$request->name;
            $course->major=$request->major;
            $course->time=$request->time;
            $course->image=$imageName;

            if($course->save()){
                return response()->json([
                    'success' => "success",
                    'data' => $course
                ]);
            }

            return response()->json([
                'success' => "success",
                'data' =>'error'
            ]);
        }
        
        return response()->json([
            'success' => "success",
            'data' =>'Course already exist'
        ]);
    }
}
