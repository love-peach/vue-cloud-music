<template>
    <transition name="sheet">
        <div class="sheet-mask" @click="$emit('close')">
            <div class="sheet-container" @click.stop="">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .sheet-mask {
        position: fixed;
        z-index: 3000;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        background: rgba(0, 0, 0, 0.5);
        transition: background-color.3s ease;
        .sheet-container {
            position: absolute;
            bottom: 0;
            overflow-y: auto;
            width: 100%;
            background-color: #fff;
            transition: all .3s ease;
        }
    }

    // 一下是控制过渡的样式
    .sheet-mask.sheet-enter {
        background-color: rgba(0, 0, 0, 0);
    }
    .sheet-mask.sheet-leave-active {
        background-color: rgba(0, 0, 0, 0);
    }
    .sheet-enter .sheet-container,
    .sheet-leave-active .sheet-container {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }
</style>
