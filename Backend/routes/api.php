<?php

use Illuminate\Support\Facades\Route;
// use App\Models\User;

// Public Api all frontend without authentication
Route::group([
  'prefix' => 'v1',
  'as' => 'public.',
  'namespace' => 'Api\Frontend'],
  function () {
     require base_path('routes/api/public.php');
  });


// Admin Api
Route::group([
  'prefix' => 'v1',
  'as' => 'api.',
  'namespace' => 'Api\Backend',
], function () {
   require base_path('routes/api/admin.php');
});




Route::post('/login', 'Api\Auth\AuthController@login');
Route::post('/register', 'Api\Auth\AuthController@register');

// api access with token
Route::group([
  'prefix' => 'v1',
  'as' => 'api.',
  'middleware' => 'auth:api',
], function () {
   Route::get('details', 'Api\Backend\UserApiController@details');
});


// $user = User::make(request()->all(), [
//   'name' => 'required|string',
//   'email' => 'required|string|email', // Remove the unique rule
//   'password' => 'required|string|min:6',
// ]);