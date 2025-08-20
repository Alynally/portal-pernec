<?php

use App\Http\Controllers\Api\v1\ServicesController;
use App\Http\Controllers\Api\v1\ContactFormController;
use App\Http\Controllers\Api\v1\ContactServicesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('/pernecservices', ServicesController::class);
    Route::apiResource('/contactform', ContactFormController::class);
    Route::apiResource('/contactservices', ContactServicesController::class);
});

