<template>
    <div>
        <div :class="[`friend-photo-${photoLength}`]">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>




