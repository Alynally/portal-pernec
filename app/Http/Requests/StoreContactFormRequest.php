<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Http\Resources\v1\ContactFormResource;
use App\Models\ContactServices;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;

class StoreContactFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'service_type' => ['required', Rule::exists('contact_services', 'code')],
            'phone_number' => ['required'],
            'message' => ['required']

        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     */
    protected function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {
            if ($this->phone_number == '0123456789') {
                $validator->errors()->add('phone_number', 'Invalid Phone Number. Please Enter a Valid Phone Number');
            }

            $validServiceTypes = ContactServices::pluck('code')->toArray();
            if (!in_array($this->service_type, $validServiceTypes)) {
                $validator->errors()->add('service_type', 'Invalid Service Type. Please Enter a Valid Service Type');
            }
        });
    }
    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     *
     * @throws \Illuminate\Http\Exceptions\HttpResponseException
     */
    protected function failedValidation(Validator $validator)
    {
        $response = [
            'status' => 'f',
            'phone_number' => $this->input('phone_number'),
            'msg' => $validator->errors()->first('phone_number') ?: $validator->errors()->first('service_type'),
        ];
        throw new HttpResponseException(response()->json(new ContactFormResource((object) $response), 422));
    }
}
