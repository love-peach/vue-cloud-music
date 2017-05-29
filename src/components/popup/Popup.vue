<template>
    <transition name="popup">
        <div class="popup-mask" @click="$emit('close')">
            <div class="popup-container" @click.stop="">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .popup-mask {
        position: fixed;
        z-index: 3000;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        background: rgba(0, 0, 0, 0.5);
        transition: background-color.3s ease;
        .popup-container {
            position: relative;
            /* 设置 inline-block 和 取消宽度的设置，是为了让在使用popup组件的地方，自己去定义*/
            display: inline-block;
            /*width: 5.25rem;*/
            overflow-y: auto;
            height: 100%;
            box-sizing: border-box;
            background-color: #fff;
            transition: all .3s ease;
        }
    }

    // 一下是控制过渡的样式
    .popup-mask.popup-enter {
        background-color: rgba(0, 0, 0, 0);
    }
    .popup-mask.popup-leave-active {
        background-color: rgba(0, 0, 0, 0);
    }
    .popup-enter .popup-container,
    .popup-leave-active .popup-container {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
</style>
