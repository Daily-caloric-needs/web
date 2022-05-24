<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    //public static $wrap = 'products';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'fat' => $this->fat,
            'proteins' => $this->proteins,
            'carbohydrates' => $this->carbohydrates,
            'calories' => $this->calories,
        ];
        //return parent::toArray($request);
    }
}
