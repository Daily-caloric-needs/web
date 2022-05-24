<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_info extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'height',
        'weight',
        'age',
        'gender',
        'work',
        'calorieNorm',
        'waterNorm'
    ];
}
