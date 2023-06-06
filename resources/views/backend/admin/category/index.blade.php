@extends('backend.layouts.master')
@section('title', 'Addtools')
@section('content')
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-tools icon-gradient bg-mean-fruit"> </i>
                </div>
                <div>All Category</div>
                <div class="d-inline-block ml-2">
                     
                        <a href="{{URL::to('admin/category/create')}}" class="btn btn-success"><i
                                class="glyphicon glyphicon-plus"></i>
                            New Category
</a>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 col-sm-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="manage_all"
                               class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Category Name</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                       
                        @foreach ( $category as $value )

                            <tr>

                            <th>{{$value->title}}</th>
                            <th> <a href="{{Route('admin.category.edit',$value->id)}}">Edit</a></th>
                                <th>
                                    <form action="{{route('admin.category.destroy',$value->id)}}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <button type="submit">Delete</button>               
                                    </form>
                                </th>
                                </tr>
                        @endforeach 
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        @media screen and (min-width: 768px) {
            #myModal .modal-dialog {
                width: 70%;
                border-radius: 5px;
            }
        }
    </style>
    
 
@stop
