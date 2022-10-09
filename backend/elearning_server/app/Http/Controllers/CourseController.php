<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Assign;

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
            $course->assigned=$request->assigned;

            if($course->save()){
                return response()->json([
                    'status' => "success",
                    'data' => $course
                ]);
            }

            return response()->json([
                'status' => "failed",
                'data' =>'error'
            ]);
        }
        
        return response()->json([
            'status' => "failed",
            'data' =>'Course already exist'
        ]);
    }

    //assign instructor to course
    function assignInstructor(Request $request){
        $check_assign=Assign::where('course_code','=',$request->ccode)->first();

        if(!$check_assign){
            $assign= new Assign;

            $assign->course_code=$request->ccode;
            $assign->instructor_code=$request->icode;
        
            if($assign->save()){
                return response()->json([
                    'status' => "success",
                    'data' => $assign
                ]);
            }

            return response()->json([
                'status' => "failed",
                'data' =>'error'
            ]);
        }

        return response()->json([
            'status' => "failed",
            'data' =>'course already assigned'
        ]);

    }

    //get unassigned courses grouped by major
    function getUnassignedCourses($major){
        
        $course=Course::where('major','=',$major)->where('assigned','=','0')->get();

        if($course){
            return response()->json([
                'status'=>'Success',
                'data'=>$course
            ]);
        }

        return response()->json([
            'status'=>'failed',
            'data'=>'error'
        ]);
        
    }

    //get assigned courses
    function getAssignedCourses($major){
        
        //$course=Course::where('major','=',$major)->where('assigned','=','1')->get();

        $course=Course::find('major','=',$major)->Assigned;

        if($course){
            return response()->json([
                'status'=>'Success',
                'data'=>$course
            ]);
        }

        return response()->json([
            'status'=>'failed',
            'data'=>'error'
        ]);
        
    }

    
}

