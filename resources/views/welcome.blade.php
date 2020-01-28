@extends('layouts.app')

@section('content')
<div id="example" data-id="{{ \auth()->user()->id }}"></div>
@endsection
