<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-container" @click.stop="">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .modal-mask {
        position: fixed;
        z-index: 3000;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        background: rgba(0, 0, 0, 0.5);
        transition: background-color.3s ease;
        .modal-container {
            position: relative;
            overflow-y: auto;
            height: 100%;
            width: 5.25rem;
            box-sizing: border-box;
            background-color: #fff;
            transition: all .3s ease;
        }
    }

    // 一下是控制过渡的样式
    .modal-mask.modal-enter {
        background-color: rgba(0, 0, 0, 0);
    }
    .modal-mask.modal-leave-active {
        background-color: rgba(0, 0, 0, 0);
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
</style>
