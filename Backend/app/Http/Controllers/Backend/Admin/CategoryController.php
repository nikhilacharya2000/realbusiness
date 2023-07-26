<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::orderby('created_at', 'desc')->get();
      return view('backend.admin.category.index',compact("category"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category = Category::orderby('created_at', 'desc')->get();
        return view('backend.admin.category.create' ,compact("category"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
                'title' => 'required',
               
              ]);
              try{
                 
                 $category = new Category;
               
                 $category->title = $request->input('title');
               
               //  $category->uploaded_by = auth()->user()->id;
                
                 $category->save(); //
                 return redirect()->route('admin.category.index');
              }catch (\Illuminate\Database\QueryException $e) {
                  
                if ($e->getMessage()) {
                   return redirect()->route('admin.category.create')->with('error', ' Sorry, this category already exists. ');
               }
               
            }
             
     }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
   
        $category = Category::where('id', $id)->first();
        return view('backend.admin.category.edit',compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id){


        $request->validate([
           'title' => 'required',
           
           
        ]);
        try{
            $category = Category::find($id);
            $category->title= $request->title;
           
            
          $category->save();
          return redirect()->route('admin.category.index');
        }

        catch(\Exception $e){
            session()->flash('sticky_error', $e->getMessage());
             print_r($e->getMessage());
             die;
            return back();
           
          }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::where(["id"=>$id])->delete();
        return back (); 
    }
}
