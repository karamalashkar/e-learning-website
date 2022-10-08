<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Major extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'majors';
    
    protected $fillable = [
        'major_id', 'major_name'
    ];
}
