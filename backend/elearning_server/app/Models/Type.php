<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Type extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'user_types';
    
    protected $fillable = [
        'type_id', 'type_name'
    ];
}
