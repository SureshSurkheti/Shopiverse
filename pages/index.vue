<template>
    <div>
        <div v-if="products && products.length" class="grid grid-cols-4 gap-4">
            <div v-for="product in products" :key="product.id">
            <ProductComp :product="product"/>
        </div>
    </div>
    </div>
</template>

<script setup>
    const {data: products} = await useFetch('/api/products')
</script>
