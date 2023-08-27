<template>
    <div class="calculator">
        <DisplayCalculator value="1000" />
        <ButtonCalculator label="AC" triple />
        <ButtonCalculator label="/" operation/>
        <ButtonCalculator label="7" />
        <ButtonCalculator label="8" />
        <ButtonCalculator label="9" />
        <ButtonCalculator label="*" operation />
        <ButtonCalculator label="4" />
        <ButtonCalculator label="5" />
        <ButtonCalculator label="6" />
        <ButtonCalculator label="-" operation />
        <ButtonCalculator label="1" />
        <ButtonCalculator label="1" />
        <ButtonCalculator label="2" />
        <ButtonCalculator label="+" operation />
        <ButtonCalculator label="0" double />
        <ButtonCalculator label="." />
        <ButtonCalculator label="=" operation/>
    </div>
</template>

<script>

    import DisplayCalculator from "../components/DisplayCalculator.vue";
    import ButtonCalculator from "../components/ButtonCalculator.vue";

    export default {
        name: 'CalculatorCalculator',
        components: { DisplayCalculator, ButtonCalculator}
    }
</script>

<style>
    .calculator {
        height: 320px;
        width: 280px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>