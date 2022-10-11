<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller{
    //add new user
    function addUser(Request $request){
        $user= new User;
        $password=rand(10000,100000);
    
        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=$password;
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

    function login(Request $request){
        $user=User::where('email','=',$request->email)->where('password','=',$request->password)
        ->first();
        
        if($user){
            return response()->json([
                "status"=>'Success',
                "data"=>$user
            ]);
        }

        return response()->json([
            "status"=>'Failed',
            "data"=>'error'
        ]);

    }
    
}

