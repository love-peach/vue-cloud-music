<template>
    <div>
        <div class="friend-photo-1" v-if="photoLength == 1">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-2" v-if="photoLength == 2">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-3" v-if="photoLength == 3">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-4" v-if="photoLength == 4">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-5" v-if="photoLength == 5">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-6" v-if="photoLength == 6">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-7" v-if="photoLength == 7">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-8" v-if="photoLength == 8">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>

        <div class="friend-photo-9" v-if="photoLength == 9">
            <img v-for="item in photos" :src="item.pcSquareUrl" alt="">
        </div>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>




