<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        return Inertia::render('Student/Index', [
            'students' => Student::orderBy('name')->get()
        ]);
    }

    public function store(Request $request)
    {
        $attr = $request->validate([
            'nisn' => 'nullable|string|max:20',
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
        ]);

        Student::create($attr);
        return back()->with('message', 'Siswa berhasil ditambahkan');
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return back();
    }
}
