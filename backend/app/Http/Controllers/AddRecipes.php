<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddRecipes extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
//        $created = News::create(
//            $request->only(['category_id', 'title', 'author', 'status', 'description']) + [
//                'slug' => \Str::slug($request->input('title'))
//            ]
//        );
//
//        if($created) {
//            return back()
//                ->with('success', 'Запись успешно добавлена');
//        }
//
//        return back()
//            ->with('error', 'Не удалось добавить запись')
//            ->withInput();
    }
}
