<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Assignment extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'assignments';
    
    protected $fillable = [
        'course_code', 'title', 'body', 'attachement', 'due'
    ];
}
