<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Product_list;
use App\Http\Requests\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipe = Recipe::all();
        //$productList = Product_list::all();


        $response = [
            'recipe' => $recipe,
//            'productList' => $productList
        ];

        return response($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  RecipeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RecipeRequest $request)
    {
//        $request->validate([
//            'user_id' => 'required',
//            'name' => 'required',
//            'description' => 'required'
//        ]);

        $recipe = Recipe::create($request->only('user_id','name','description','categories'));
        $recipe_id = $recipe->id;
        $products = $request->only('productsList');

        foreach ($products as $product)
        {
            foreach ($product as $value)
            {
                $productList = Product_list::create([
                    'product_id' => $value['product_id'],
                    'modifier' =>  $value['modifier'],
                    'recipe_id' => $recipe_id
                ]);
            }
        }

        $response = [
            'recipe' => $recipe
        ];

        return response($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recipe = Recipe::where('id',$id)->get();
        $productList = Product_list::where('recipe_id',$id)->get();

        foreach ($productList as $product)
        {
            $products[] = [
                'product' => Product::where('id',$product['product_id'])->get(),
                'modifier' => $product['modifier']

            ];
        }
        $response = [
            'recipe' => $recipe,
            'productList' => $products
        ];
        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Recipe::find($id);
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Recipe::destroy($id);
    }

    /**
     * Search for a name
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Recipe::where('name', 'like', '%'.$name.'%')->get();
    }
}
