<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Student extends Model
{
    protected $fillable = ['nisn', 'name', 'gender', 'address', 'phone'];
    public function attendances(): HasMany
    {
        return $this->hasMany(Attendance::class);
    }
}


