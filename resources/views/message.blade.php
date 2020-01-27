@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Message</div>

                <div class="card-body">
                    <form action="" method="POST">
                        @csrf

                        <div class="form-group">
                            <input type="text" name="title" id="" placeholder="Title" class="form-control">
                        </div>

                        <div class="form-group">
                            <textarea name="body" id="" cols="30" rows="10" class="form-control"></textarea>
                        </div>

                        <button type="submit" class="btn btn-success">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
