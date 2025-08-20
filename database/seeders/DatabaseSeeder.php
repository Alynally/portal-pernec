<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\PernecService;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        PernecService::create([
            'id' => 1,
            'icon' => 'essentials',
            'title' => 'IT </br> Essentials',
            'description' => 'Explore our IT Essentials service for streamlined business solutions',
            'link' => '/it-essentials'
        ]);
        
        PernecService::create([
            'id' => 2,
            'icon' => 'productivity',
            'title' => 'ICT Productivity </br> Suites',
            'description' => 'Boost your business productivity with our advanced ICT solutions',
            'link' => '/ict-productivity-suites'
        ]);
        
        PernecService::create([
            'id' => 3,
            'icon' => 'enabler',
            'title' => 'Digital Trasnsformation Enabler',
            'description' => 'Empower your digital transformation with our specialized services',
            'link' => '/digital-transformation-enabler'
        ]);
        
        PernecService::create([
            'id' => 4,
            'icon' => 'cyseca',
            'title' => 'Cyber Security Solution',
            'description' => 'Secure your business with our Cyber Security Solutions',
            'link' => '/cyber-security'
        ]);
        
        PernecService::create([
            'id' => 5,
            'icon' => 'telco',
            'title' => 'Telecommunication',
            'description' => 'Pernec provides Telco solutions, spanning infrastructure and Telco 2.0',
            'link' => '/telecommunication'
        ]);
        
        PernecService::create([
            'id' => 6,
            'icon' => 'publicsafety',
            'title' => 'Public Safety',
            'description' => 'Pernec innovates public safety: CCTV, analytics, biometrics for 20 years',
            'link' => '/public-safety'
        ]);
        
        PernecService::create([
            'id' => 7,
            'icon' => 'power',
            'title' => 'Power & </br> Utilities',
            'description' => "Empower utilities' digital growth with Renewable Energy, Smart Meters, and Infra Systems",
            'link' => '/power-and-utilities'
        ]);
        
        PernecService::create([
            'id' => 8,
            'icon' => 'defence',
            'title' => 'Defence Tactical </br> Solutions',
            'description' => 'Provide "military-grade" defense solutions with ICT expertise: Infrastructure, Systems, Gadgets',
            'link' => '/defence-tactical-solutions'
        ]);
        
        PernecService::create([
            'id' => 9,
            'icon' => 'deployment2',
            'title' => 'Deployment Operation Services',
            'description' => 'Deliver end-to-end ICT solutions with certified experts, partners, and specialized resources',
            'link' => '/deployment-operation-services'
        ]);
        
        PernecService::create([
            'id' => 10,
            'icon' => 'staytuned',
            'title' => 'Stay Tuned for More Offerings',
            'description' => 'Stay tuned for exciting updates and upcoming offerings',
            'link' => '/service'
        ]);
        
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
