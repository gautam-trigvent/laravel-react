<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Auth/Login");
});

// Route::get('/', function () {
//     return Inertia::render("Home");
// });