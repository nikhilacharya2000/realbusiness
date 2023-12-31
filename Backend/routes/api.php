<?php

use Illuminate\Support\Facades\Route;


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
Route::get('/all-user', 'Api\Frontend\PublicApiController@users');

// Working Api Made by Rahul Soni 
Route::get('/categories', 'Api\Frontend\PublicApiController@getCategory');
Route::get('/celebrity', 'Api\Frontend\PublicApiController@getCelebrity');


Route::get('/celebrity-detail/{id}', 'Api\Frontend\PublicApiController@getCelebrityDetail');











// api access with token
Route::group([
  'prefix' => 'v1',
  'as' => 'api.',
  'middleware' => 'auth:api',
], function () {
   Route::get('details', 'Api\Backend\UserApiController@details');
});
