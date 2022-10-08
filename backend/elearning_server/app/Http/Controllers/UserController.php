<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller{
    //add new user
    function addUser(Request $request){
        $user= new User;
    
        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=$request->password;
        $user->major=$request->major;
        $user->type=$request->type;
            
        $check_email=User::where('email','=',$request->email)->first();
        if(!$check_email){
            if($user->save()){
                return response()->json([
                    'status' => "success",
                    'data' => $user
                ]);
            }
        
            return response()->json([
                'status' => "failed",
                'data' =>'error'
            ]);
        }

        return response()->json([
            'status' => "failed",
            'data' =>'email already exist'
        ]);
            
    }
    
}

