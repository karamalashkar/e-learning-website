<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Enroll extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'enrolled_students';
    
    protected $fillable = [
        'course_code', 'student_id'
    ];
}