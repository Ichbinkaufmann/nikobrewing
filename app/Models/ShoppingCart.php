<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ShoppingCart extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id','product_id','price','quantity','total_price','processed'];

    public function product(): BelongsTo{
        return $this->belongsTo(Product::class);
    }
}