<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        $blog = new Blog();

        $blog->name = $request->name;
        $blog->body = $request->body;

        $blog->save();

        return $blog;
    }

    public function show(Blog $blog)
    {
        $blog = Blog::findOrFail($blog->id);
        return response()->json($blog);
    }

    public function edit(Blog $blog)
    {
        //
    }

    public function update(Request $request, Blog $blog)
    {
        //
    }

    public function destroy(Blog $blog)
    {
        //
    }
}
