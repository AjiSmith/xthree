<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PasswordResetRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class CustomPasswordResetController extends Controller
{
    /**
     * Handle an incoming password reset request.
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'requested_password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->withErrors(['email' => 'We cannot find a user with that email address.']);
        }

        PasswordResetRequest::create([
            'email' => $request->email,
            'requested_password' => Hash::make($request->requested_password),
            'status' => 'pending',
        ]);

        return back()->with('status', 'Your password reset request has been submitted and is pending administrator approval.');
    }
}
