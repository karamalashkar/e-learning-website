<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Submit extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'submitted_assignments';
    
    protected $fillable = [
        'course_code', 'student_id', 'assignment_id', 'attachement'
    ];
}
