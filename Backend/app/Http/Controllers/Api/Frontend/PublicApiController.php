<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Models\User;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ResponseController;
use DB;

class PublicApiController extends ResponseController
{
    public function users(Request $request)
    {
        $users = User::all();
        if ($users) {
            return $this->sendResponse($users, 'success');
        } else {
            return $this->sendError('No records have found');
        }
    }

    public function getCategory(Request $request){
        $category = Category::get();
        if($category){
             return $this->sendResponse($category, 'success');
        }else{
             return $this->sendError('No records have found');
        }
    }
}
