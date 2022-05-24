<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserinfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => ['required'],
            'height' => ['required'],
            'weight' => ['required'],
            'age' => ['required'],
            'gender'=>  [
                'required',
                Rule::in(['male', 'female']),
            ],
            'work' => [
                'required',
                Rule::in(['weakly', 'base', 'medium', 'strong', 'veryStrong']),
            ],
            'calorieNorm' => ['required'],
            'waterNorm' => ['required']
        ];
    }
}
