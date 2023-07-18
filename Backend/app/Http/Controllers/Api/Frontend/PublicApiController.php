<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Models\User;
use App\Models\Category;
use App\Models\Celebrity;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\ResponseController;
use DB;
use URL;

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

    public function getCelebrity(Request $request){
        $celebrity = Celebrity::get();
        if($celebrity){
                foreach($celebrity as $key=>$value){
                    $celebrity[$key]['image'] = URL::to('/uploads/'.$value->image);
                }

             return $this->sendResponse($celebrity, 'success');
        }else{
             return $this->sendError('No records have found');
        }
    }
}
