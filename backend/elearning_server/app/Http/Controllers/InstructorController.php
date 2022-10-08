<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enroll;

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
}