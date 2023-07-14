@extends('backend.layouts.master')
@section('title', 'Addtools')
@section('content')
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-tools icon-gradient bg-mean-fruit"> </i>
                </div>
                <div>All Celebrity</div>
                <div class="d-inline-block ml-2">

                    <a href="{{ URL::to('admin/celebrity/create') }}" class="btn btn-success"><i
                            class="glyphicon glyphicon-plus"></i>
                            Add New Celebrity 
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
                        <table id="manage_all" class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                                <tr>
                                <th>#</th>
                                    <th>Celebrity Name</th>

                                </tr>
                            </thead>
                            <tbody>

                                @foreach ($celebrity as $value)
                                    <tr>
                                    <td>{{$loop->iteration}}</td>
                                        <td>{{ $value->name }}</td>

                                        <td>
                                            <div class="d-flex">
                                                <a class="btn btn-primary mr-2"
                                                    href="{{ Route('admin.celebrity.edit', $value->id) }}">Edit</a>
                                                <form action="{{ route('admin.celebrity.destroy', $value->id) }}"
                                                    method="POST">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button class="btn btn-danger" type="submit">Delete</button>
                                                </form>
                                            </div>
                                        </td>
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
