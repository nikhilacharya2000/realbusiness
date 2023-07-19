<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Celebrity;
use App\Models\Category;

class CelebrityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $celebrity = Celebrity::orderby('created_at', 'desc')->get();

        return view('backend.admin.celebrity.index', compact('celebrity'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category = Category::orderby('created_at', 'desc')->get();

        $celebrity = Celebrity::orderby('created_at', 'desc')->get();
        return view('backend.admin.celebrity.create', compact('celebrity', 'category'));
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
            'name' => 'required',
            'image' => 'required',
            'category' => 'required',
        ]);
        try {
            $celebrity = new Celebrity();

            $celebrity->name = $request->input('name');
            $celebrity->category = $request->input('category');

            $file = $request->file('image');
            $destinationPath = 'uploads';
            $file->move($destinationPath, $file->getClientOriginalName());
            $celebrity->image = $file->getClientOriginalName();

            $celebrity->save(); //
            return redirect()->route('admin.celebrity.index');
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->getMessage()) {
                return redirect()
                    ->route('admin.celebrity.create')
                    ->with('error', ' Sorry, this celebrity already exists. ');
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Celebrity  $celebrity
     * @return \Illuminate\Http\Response
     */
    public function show(Celebrity $celebrity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Celebrity  $celebrity
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $celebrity = Celebrity::where('id', $id)->first();
        $category = Category::orderby('created_at', 'desc')->get();
        return view('backend.admin.celebrity.edit', compact('celebrity', 'category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Celebrity  $celebrity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        try {
            $celebrity = Celebrity::find($id);
            $celebrity->name = $request->name;
            $celebrity->category = $request->category;

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $destinationPath = 'uploads';
                $file->move($destinationPath, $file->getClientOriginalName());
                $celebrity->image = $file->getClientOriginalName();
            }

            $celebrity->save();
            return redirect()->route('admin.celebrity.index');
        } catch (\Exception $e) {
            session()->flash('sticky_error', $e->getMessage());
            print_r($e->getMessage());
            die();
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Celebrity  $celebrity
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $celebrity = Celebrity::where(['id' => $id])->delete();
        return back();
    }
}
