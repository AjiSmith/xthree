<?php
namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AttendanceReportController extends Controller
{
    public function index(Request $request)
    {
        $month = $request->month ?? date('m');
        $year = $request->year ?? date('Y');

        $reports = Student::with(['attendances' => function($query) use ($month, $year) {
            $query->whereMonth('date', $month)->whereYear('date', $year);
        }])
        ->get()
        ->map(function ($student) {
            return [
                'id' => $student->id,
                'name' => $student->name,
                'nisn' => $student->nisn,
                'hadir' => $student->attendances->where('status', 'Hadir')->count(),
                'sakit' => $student->attendances->where('status', 'Sakit')->count(),
                'izin' => $student->attendances->where('status', 'Izin')->count(),
                'alfa' => $student->attendances->where('status', 'Alfa')->count(),
            ];
        });

        return Inertia::render('Attendance/Report', [
            'reports' => $reports,
            'currentMonth' => (int)$month,
            'currentYear' => (int)$year
        ]);
    }
}