<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Requests\StoreContactFormRequest;
use App\Http\Resources\v1\ContactFormResource;
use App\Http\Controllers\Controller;
use App\Models\ContactForm;
use Illuminate\Http\JsonResponse;

class ContactFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactFormRequest $request) : JsonResponse
    {
        // Save to database
        $contactForm = ContactForm::create($request->validated());

        // Prepare success response data
        $successResponse = [
            'phone_number' => $contactForm->phone_number,
            'msg' => 'Your form has been submitted successfully',
            'status' => 'a'
        ];

        // Return success response
        return response()->json(new ContactFormResource((object) $successResponse), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactForm $contactForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactForm $contactForm)
    {
        //
    } 
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactForm $contactForm)
    {
        //
    }
}
