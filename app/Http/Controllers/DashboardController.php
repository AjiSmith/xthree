<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\FailedLoginAttempt;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'total_siswa' => User::count(),
                'attendance_rate' => 98,
                'total_subjects' => 12,
            ],
            'current_schedule' => [
                ['time' => '07:00', 'subject' => 'Pemrograman Web', 'room' => 'Lab 1'],
                ['time' => '09:00', 'subject' => 'Basis Data', 'room' => 'Lab 2'],
            ],
            'failed_logins' => FailedLoginAttempt::latest()->limit(10)->get(),
        ]);
    }
}
