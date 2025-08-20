<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Request;
use App\Http\Requests\StoreContactFormRequest;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactFormResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'status' => $this->status,
            'phone_number' => $this->phone_number,
            'msg' => $this->msg,
        ];
    }
}