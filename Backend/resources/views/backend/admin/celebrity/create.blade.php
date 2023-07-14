@extends('backend.layouts.master')
@section('title', 'tools')
@section('content')




@if (session('error'))
        <section class="container" style="background: #f0f0f0;">
            <div class="row py-3 justify-content-center">
                <div class="col-3 alert alert-danger  text-center ">
                    {{ session('error') }}

                </div>
            </div>
        </section>
    @endif



<form id='create' action="{{Route('admin.celebrity.store')}}"  enctype="multipart/form-data" method="post" accept-charset="utf-8" class="needs-validation"
      novalidate>
      @csrf
    <div id="status"></div>
    <div class="form-row">
        
        
        <div class="clearfix"></div>



        <div class="form-group col-md-12 col-sm-12">
            <label for=""> Celebrity Name </label>
            <input type="text" class="form-control" id="name" name="name" value=""
                      placeholder=""></input>
             
            @error('name')
            <span id="error_description" class="has-error">{{$message}}</span>
                    @enderror

        </div>

        <div class="col-md-12 mb-3">
                <label for="photo">Image  (File must be jpg, jpeg, png)</label>
                <div class="input-group">
                    <input id="photo" type="file" name="image" style="display:none">
                    <div class="input-group-prepend">
                        <a  class="btn btn-dark text-white" onclick="$('input[id=photo]').click();">Browse</a>
                    </div>
                    <input type="text" name="image" class="form-control" id="SelectedFileName" value="" readonly>


                </div>
                @error('image')
                    <div class="has-error mt-2">{{ $message }}</div>
                @enderror


            </div>
        <div class="clearfix"></div>
        <div class="form-group col-md-12">
            <button type="submit" class="btn btn-success button-submit"
                    data-loading-text="Loading..."><span class="fa fa-save fa-fw"></span> Save
            </button>
        </div>
    </div>
</form>
@stop

