<template>
    <div>
        <h2>工作经历</h2>
        <el-form>
            <div v-for="(work,index) in workHistory" class="container">
                <el-form-item label="公司">
                    <el-input v-model="work.company"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input v-model="work.content"></el-input>
                </el-form-item>
                <i class="el-icon-delete" v-on:click="removeWorkHistory(index)"></i>
                <hr>
            </div>
            <el-button type="primary" v-on:click="addWorkHistory">添加一项</el-button>
        </el-form>
    </div>
</template>

<script>
  export default {
    props: ['workHistory'],
    methods:{
        addWorkHistory:function(){
            this.workHistory.push({
                company:'',
                content:''
            })
        },
        removeWorkHistory:function(index){
            this.workHistory.splice(index,1)
        }
    }
}
</script>