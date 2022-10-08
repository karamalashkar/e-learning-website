<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Assign extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'assigned_instructors';
    
    protected $fillable = [
        'course_code', 'instructor_code'
    ];
}
