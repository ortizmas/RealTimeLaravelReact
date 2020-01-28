<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/send', function () {
//     broadcast(new \App\Events\SendMessage);
//     return 'none';
// });
Route::middleware('auth')->group( function () {
    Route::get('/', function () {
        return view('welcome');
    });
    Route::get('/blog', function () {
        return view('blog');
    });


    Route::get('/messages', function () {
        $users = \App\User::get();
        return view('message', compact('users'));
    });

    Route::post('/messages', function () {
        $data = request()->input();
        $message = \App\Message::create($data);
        $user = \App\User::findOrFail($message->user_id);

        //broadcast(new \App\Events\SendMessage($message)); //public
        broadcast(new \App\Events\SendMessage($message, $user)); //private
        return redirect('/messages');
    });
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
