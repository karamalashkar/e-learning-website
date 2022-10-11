<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submit;
use App\Models\User;

class StudentController extends Controller{
    //submit assignment api
    function submitAssignment(Request $request){
        $check_enroll=Submit::where('student_id','=',$request->sid)
        ->where('assignment_id','=',$request->aid)->first();

        if(!$check_enroll){
            $base64Image = explode(";base64,", $request->attachement);
            $explodeImage = explode("image/", $base64Image[0]);
            $imageType = $explodeImage[1];
            $image_base64 = base64_decode($base64Image[1]);
            $imageName = $request->sid.'_'.$request->aid.'.png';
            \File::put(public_path(). '/submit_assignments/' . $imageName, base64_decode($base64Image[1]));
            
            $submit= new Submit;

            $submit->course_code=$request->ccode;
            $submit->student_id=$request->sid;
            $submit->assignment_title=$request->title;
            $submit->attachement=$request->image;
            
            if($submit->save()){
                return response()->json([
                    'status' => "success",
                    'data' => $submit
                ]);
            }

            return response()->json([
                'status' => "failed",
                'data' =>'error'
            ]);
        }

        return response()->json([
            'status' => "failed",
            'data' =>'Already Submitted'
        ]);
    }

    //get students grouped by major
    function getAllStudents($major){
        $students=User::where('type','=','3')->where('major','=',$major)->get();

        if($students){
            return response()->json([
                'status'=>'success',
                'data'=> $students
            ]);
        }

        return response()->json([
            'status'=>'failed',
            'data'=>'error'
        ]);
    }
}