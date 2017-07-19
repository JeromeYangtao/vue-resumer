<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div v-for="(item,index) in items" class="container">
                <el-form-item label="学校">
                    <el-input v-model="item.school"></el-input>
                </el-form-item>
                <el-form-item label="学位">
                    <el-input v-model="item.degree"></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-input v-model="item.duration"></el-input>
                </el-form-item>
                <i class="el-icon-delete" v-on:click="remobeItem(index)"></i>
                <hr>
            </div>
            <el-button type="primary" v-on:click="addItem">添加一项</el-button>
        </el-form>
    </div>
</template>

<script>
  export default {
    props: ['items'],
    methods:{
        addItem:function(){
            this.items.push({
                school:'',
                duration:'',
                degree:''
            })
        },
        remobeItem:function(index){
            this.items.splice(index,1)
        }
    }
}
</script>