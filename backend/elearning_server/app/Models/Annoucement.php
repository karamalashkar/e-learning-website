<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Annoucement extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'annoucements';
    
    protected $fillable = [
        'course_code', 'title', 'text'
    ];
}
