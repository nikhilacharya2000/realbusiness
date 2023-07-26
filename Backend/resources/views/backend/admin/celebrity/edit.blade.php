@extends('backend.layouts.master')
@section('content')
    <form id='edit' action="{{ Route('admin.celebrity.update', $celebrity->id) }}" enctype="multipart/form-data"
        method="post" accept-charset="utf-8" class="needs-validation">
        @csrf
        <div id="status"></div> {{ method_field('PATCH') }}
        <div class="form-row">




            <div class="form-group col-md-12 col-sm-12">

                <label for=""> Celebrity Name</label>
                <input type="text" class="form-control" id="name" name="name" value="{{ $celebrity->name }}"
                    placeholder=""></input>
                </br>

                @error('title')
                    <span id="error_description" class="has-error">{{ $message }}</span>
                @enderror


            </div>

            
            <div class="form-group col-md-12 col-sm-12">
    <label for="category">Category</label>
    <select name="category" id="category" class="form-control">
        <option value=""></option>
        @foreach ($category as $categories)
            <option value="{{ $categories->id }}" @if ($categories->id == $celebrity->categoryOne->id) selected @endif>{{ $categories->title }}</option>
        @endforeach
    </select>
    <br>
</div>





            <div class="col-md-12 mb-3">
                @if ($celebrity->image)
                    <img style='width:50px;' src="{{ URL::to('/uploads/' . $celebrity->image) }}" />
                @endif
                <label for="photo">Image (File must be jpg, jpeg, png)</label>
                <div class="input-group">


                    <input id="photo" type="file" name="image" style="display:none">
                    <div class="input-group-prepend">
                        <a class="btn btn-dark text-white" onclick="$('input[id=photo]').click();">Browse</a>
                    </div>
                    <input type="text" name="image" class="form-control" id="SelectedFileName" value="" readonly>


                </div>
               
                <script type="text/javascript">
                    $('input[id=photo]').change(function() {
                        $('#SelectedFileName').val($(this).val());
                    });
                </script>
                
            </div>




            <div class="clearfix"></div>
            <div class="form-group col-md-12">
                <button type="submit" class="btn btn-success button-submit" data-loading-text="Loading..."><span
                        class="fa fa-save fa-fw"></span> Save
                </button>
            </div>
        </div>
    </form>

@stop
