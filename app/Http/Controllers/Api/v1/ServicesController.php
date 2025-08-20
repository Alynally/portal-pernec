<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\PernecService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\ServiceResource;
use App\Http\Resources\v1\ServiceCollection;
use Illuminate\Support\Facades\Redis;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Redis::get('services');
        if ($services) {
            // Decode JSON data from Redis
            $services = json_decode($services, true);
            // Convert the decoded array to a collection of models
            $services = PernecService::hydrate($services);
        } else {
            $services = PernecService::all();
            // Convert to JSON before storing in Redis
            Redis::set('services', $services->toJson());
            Redis::expire('services', 3600); // Expire in 60 minutes (3600 seconds)
        }

        return new ServiceCollection($services);
    }

    /**
     * Display the specified resource.
     */
    public function show(PernecService $pernecservice)
    {
        $serviceKey = 'service_' . $pernecservice->id;
        $service = Redis::get($serviceKey);

        if (!$service) {
            $service = $pernecservice;
            // Convert model to JSON before storing in Redis
            Redis::set($serviceKey, $service->toJson());
            Redis::expire($serviceKey, 3600); // Expire in 60 minutes
        } else {
            // Decode JSON data from Redis
            $service = json_decode($service, true);
            // Convert the decoded array to a model instance
            $service = PernecService::find($service['id']);
        }

        return new ServiceResource($service);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PernecService $pernecServices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PernecService $pernecServices)
    {
        //
    }
}

