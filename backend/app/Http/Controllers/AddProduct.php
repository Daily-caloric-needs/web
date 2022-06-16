<?php


namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class AddProduct extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'fat' => 'required',
            'proteins' => 'required',
            'carbohydrates' => 'required',
            'calories' => 'required'
        ]);


        return Product::create($request->input());
    }
}
