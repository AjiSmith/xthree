<?php
namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    public function index(Request $request)
    {
        $date = $request->date ?? date('Y-m-d');
        
        return Inertia::render('Attendance/Index', [
            'students' => Student::orderBy('name')->get(),
            'attendances' => Attendance::where('date', $date)->get(),
            'selectedDate' => $date
        ]);
    }

    public function store(Request $request)
    {
        foreach ($request->attendance as $studentId => $status) {
            Attendance::updateOrCreate(
                ['student_id' => $studentId, 'date' => $request->date],
                ['status' => $status]
            );
        }

        return back()->with('message', 'Absensi berhasil disimpan');
    }
}