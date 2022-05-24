<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_infos', function (Blueprint $table) {
            $table->id();
            $table->decimal('height',$precision = 5, $scale = 2);
            $table->decimal('weight',$precision = 5, $scale = 2);
            $table->integer('age');
            $table->enum('gender', ['male', 'female']);
            $table->enum('work', ['weakly', 'base', 'medium', 'strong', 'veryStrong'])->default('medium');
            $table->integer('calorieNorm');
            $table->integer('waterNorm');
            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_infos');
    }
};
