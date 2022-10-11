<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enroll;
use App\Models\Assignment;
use App\Models\Annoucement;
use App\Models\User;

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
        $assignment->attachement=$request->image;
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

    //add new annoucement
    function addAnnoucement(Request $request){

        $annoucement= new Annoucement;

        $annoucement->course_code=$request->ccode;
        $annoucement->title=$request->title;
        $annoucement->text=$request->text;
        
        if($annoucement->save()){
            return response()->json([
                'status' => "success",
                'data' => $annoucement
            ]);
        }

        return response()->json([
            'status' => "failed",
            'data' =>'error'
        ]);

    }

    //get instructors grouped by major
    function getAllInstructors($major){
        $instructor=User::where('type','=','2')->where('major','=',$major)->get();

        if($instructor){
            return response()->json([
                'status'=>'success',
                'data', $instructor
            ]);
        }

        return response()->json([
            'status'=>'failed',
            'data'=>'error'
        ]);
    }

}