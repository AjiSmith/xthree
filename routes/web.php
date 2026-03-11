<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AttendanceReportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::middleware(['auth', 'verified', \App\Http\Middleware\CheckUserStatus::class])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware(['role:admin,walikelas,developer'])->group(function () {
        Route::get('/attendance', [AttendanceController::class, 'index'])->name('attendance.index');
        Route::post('/attendance', [AttendanceController::class, 'store'])->name('attendance.store');
    });

    Route::middleware(['role:walikelas,developer'])->group(function () {
        Route::get('/attendance/report', [AttendanceReportController::class, 'index'])->name('attendance.report');
        Route::get('/students', [StudentController::class, 'index'])->name('students.index');
        Route::post('/students', [StudentController::class, 'store'])->name('students.store');
        Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destroy');
    });

    Route::middleware(['role:developer'])->group(function () {
        Route::resource('users', UserController::class);
        Route::get('/password-resets', [\App\Http\Controllers\Admin\PasswordResetRequestController::class, 'index'])->name('password-resets.index');
        Route::post('/password-resets/{passwordResetRequest}/approve', [\App\Http\Controllers\Admin\PasswordResetRequestController::class, 'approve'])->name('password-resets.approve');
        Route::post('/password-resets/{passwordResetRequest}/reject', [\App\Http\Controllers\Admin\PasswordResetRequestController::class, 'reject'])->name('password-resets.reject');
    });
});

require __DIR__ . '/auth.php';
