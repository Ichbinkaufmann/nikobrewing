<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::redirect('/','/prototype/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function (){
    route::get('/login', function (){
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function (){
        return Inertia::render('Prototype/Register');
    })->name('register');


    // Prototype routes
    // show product
    // show produt all
    route::get('/beer', function (){
        return Inertia::render('Prototype/Beer');
    })->name('beer');

    // show The Nikko Monkeys only
    route::get('/beer/the-nikko-monkeys', function (){
        return Inertia::render('Prototype/TheNikkoMonkeys');
    })->name('the-nikko-monkeys');

    // show nikko belgian beer only
    route::get('/beer/nikko-belgian-beer', function (){
        return Inertia::render('Prototype/NikkoBelgianBeer');
    })->name('nikko-belgian-beer');

    // show special packages only
    route::get('/beer/special-packages', function (){
        return Inertia::render('Prototype/SpecialPackages');
    })->name('special-packages');

    // Proccess routes
    // show detail product
    route::get('/show', function (){
        return Inertia::render('Prototype/Show');
    })->name('show');


    // cart
    route::get('/cart', function (){
        return Inertia::render('Prototype/Cart');
    })->name('cart');
    
    // checkout
    route::get('/checkout', function (){
        return Inertia::render('Prototype/Checkout');
    })->name('checkout');

    // payment
    route::get('/payment', function (){
        return Inertia::render('Prototype/Payment');
    })->name('payment');
});

require __DIR__.'/auth.php';