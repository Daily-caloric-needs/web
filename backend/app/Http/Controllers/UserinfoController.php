<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Http\Requests\UserinfoRequest;

class UserinfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        $request->validate([
            'id' => 'required'
        ]);
        return User_info::firstWhere('user_id', $request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserinfoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserinfoRequest $request)
    {

        return User_info::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User_info::firstWhere('user_id', $id);
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
        $info = User_info::firstWhere('user_id', $id);
        $info->fill($request->all());
        $info->save();
        return $info;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User_info::destroy($id);
    }
}
