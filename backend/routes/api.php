<?php

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Http\Controllers\AddProduct;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserinfoController;
use App\Http\Controllers\DiaryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/search/{name}', [ProductController::class, 'search']);
Route::get('/recipes', [RecipeController::class, 'index']);
Route::get('/recipes/{id}', [RecipeController::class, 'show']);
Route::get('/recipes/search/{name}', [RecipeController::class, 'search']);


// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Product routes
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    // Recipe routes
    Route::post('/recipes', [RecipeController::class, 'store']);
    Route::put('/recipes/{id}', [RecipeController::class, 'update']);
    Route::delete('/recipes/{id}', [RecipeController::class, 'destroy']);
    // User_info routes
    Route::post('/user', [UserinfoController::class, 'store']);
    Route::put('/user/{id}', [UserinfoController::class, 'update']);
    Route::get('/user/{id}', [UserinfoController::class, 'show']);
    Route::delete('/user/{id}', [UserinfoController::class, 'destroy']);
    // Diary routes
    Route::post('/diaries', [DiaryController::class, 'store']);
    Route::put('/diaries/{id}/{date}', [DiaryController::class, 'update']);
    Route::get('/diary/{id}/{date}', [DiaryController::class, 'show']);
    Route::get('/diaries/{id}', [DiaryController::class, 'index']);
});
// /{id}

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

// Route::get('/products', function () {
//    return ProductResource::collection(Product::all());
//});

//Route::post('/add-product', AddProduct::class);

