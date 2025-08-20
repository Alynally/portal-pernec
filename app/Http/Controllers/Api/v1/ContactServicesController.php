<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Requests\StoreContactServicesRequest;
use App\Http\Requests\UpdateContactServicesRequest;
use App\Http\Resources\v1\ContactServiceResource;
use App\Http\Resources\v1\ContactServiceCollection;
use App\Http\Controllers\Controller;
use App\Models\ContactServices;

class ContactServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ContactServiceCollection(ContactServices::all());
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
    public function store(StoreContactServicesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactServices $contactServices)
    {
        return new ContactServiceResource($contactServices);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactServices $contactServices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactServicesRequest $request, ContactServices $contactServices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactServices $contactServices)
    {
        //
    }
}
