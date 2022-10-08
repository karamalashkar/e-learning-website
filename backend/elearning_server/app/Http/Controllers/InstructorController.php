<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enroll;
use App\Models\Assignment;

class InstructorController extends Controller
{
    //enroll student to course
    function enrollStudent(Request $request){
        $check_enroll=Enroll::where('course_code','=',$request->ccode)
        ->where('student_id','=',$request->sid)->first();

        if(!$check_enroll){
            $enroll= new Enroll;

            $enroll->course_code=$request->ccode;
            $enroll->student_id=$request->sid;
        
            if($enroll->save()){
                return response()->json([
                    'status' => "success",
                    'data' => $enroll
                ]);
            }

            return response()->json([
                'status' => "failed",
                'data' =>'error'
            ]);
        }

        return response()->json([
            'status' => "failed",
            'data' =>'student already enrolled'
        ]);

    }

    //add new assignment
    function addAssignment(Request $request){
        $base64Image = explode(";base64,", $request->attachement);
        $explodeImage = explode("image/", $base64Image[0]);
        $imageType = $explodeImage[1];
        $image_base64 = base64_decode($base64Image[1]);
        $imageName = $request->ccode.'_'.$request->title.'.png';
        \File::put(public_path(). '/assignments/' . $imageName, base64_decode($base64Image[1]));
        
        
        $assignment= new Assignment;

        $assignment->course_code=$request->ccode;
        $assignment->title=$request->title;
        $assignment->body=$request->body;
        $assignment->attachement=$imageName;
        $assignment->due=$request->due;
        
        if($assignment->save()){
            return response()->json([
                'status' => "success",
                'data' => $assignment
            ]);
        }

        return response()->json([
            'status' => "failed",
            'data' =>'error'
        ]);

    }

}