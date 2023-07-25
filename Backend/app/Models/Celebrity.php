<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Celebrity extends Model
{
    protected $table = 'celebrity';
    use HasFactory;
    public function categoryOne()
    {
         return $this->hasOne('App\Models\Category',  'id', 'category');
    }
}
