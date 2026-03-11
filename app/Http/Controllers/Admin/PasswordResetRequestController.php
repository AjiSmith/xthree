<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PasswordResetRequest;
use App\Models\User;
use Inertia\Inertia;

class PasswordResetRequestController extends Controller
{
    public function index()
    {
        $requests = PasswordResetRequest::where('status', 'pending')->latest()->get();
        return Inertia::render('Admin/PasswordResets/Index', [
            'requests' => $requests
        ]);
    }

    public function approve(PasswordResetRequest $passwordResetRequest)
    {
        $user = User::where('email', $passwordResetRequest->email)->first();
        if ($user) {
            $user->update(['password' => $passwordResetRequest->requested_password]);
            $passwordResetRequest->update(['status' => 'approved']);
            return back()->with('success', 'Password reset request approved.');
        }
        return back()->withErrors(['error' => 'User not found.']);
    }

    public function reject(PasswordResetRequest $passwordResetRequest)
    {
        $passwordResetRequest->update(['status' => 'rejected']);
        return back()->with('success', 'Password reset request rejected.');
    }
}
