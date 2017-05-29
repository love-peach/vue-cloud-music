<template>
    <div>
        <div>this is template body</div>
    </div>
</template>
<style>

</style>
<script type="text/javascript">
    export default{
        data(){
            return{
                contentType: {
                    manageOptions: [
                        {
                            icon: '',
                            text: '创建新歌单',
                            operation: 'function',
                            belong: ['created'],
                            bothHave: false,
                        }, {
                            icon: '',
                            text: '歌单管理',
                            operation: 'function',
                            belong: ['colletion'],
                            bothHave: true,
                        }
                    ],
                    operationOptions: [
                        {
                            icon: '',
                            text: '下载',
                            operation: 'function',
                            bothHave: true,

                        }, {
                            icon: '',
                            text: '分享',
                            operation: 'function',
                            bothHave: true,
                        }, {
                            icon: '',
                            text: '编辑歌单信息',
                            operation: 'function',

                            bothHave: false,
                        }, {
                            icon: '',
                            text: '删除',
                            operation: 'function'
                        }
                    ],
                }
            }
        },
        components:{
        }
    }
</script>
