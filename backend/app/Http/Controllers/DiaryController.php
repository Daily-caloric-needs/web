<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diary;
use App\Http\Requests\DiaryRequest;

class DiaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index( int  $id)
    {
        return Diary::where('user_id',$id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  DiaryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DiaryRequest $request)
    {
        return Diary::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param  string  $date
     * @return \Illuminate\Http\Response
     */
    public function show($id,$date)
    {
        return Diary::where('date', $date)->where('user_id',$id)
            ->get();


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @param  string  $date
     * @return \Illuminate\Http\Response
     */
    public function update($id,$date,Request  $request)
    {
        $diary = Diary::Where('user_id', $id)->firstWhere('date',$date);
        $diary->fill($request->all());
        $diary->save();
        return $diary;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
