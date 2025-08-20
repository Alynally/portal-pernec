<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contact_forms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('service_type');
            $table->integer('phone_number');
            $table->longText('message');
            $table->timestamps();
        });
    }

    // const formData = ref({
    //     name: '',
    //     email: '',
    //     service_type: '',
    //     phone_number: '',
    //     message: ''
    // });
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_forms');
    }
};
