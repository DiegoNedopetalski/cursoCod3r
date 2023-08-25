<template>
    <div class="calculator">
        <Display-calculator />
        <Button-calculator />

    </div>
</template>

<script>

    import "Display-calculator"
    import "Button-calculator"

    export default {
        
    }
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>