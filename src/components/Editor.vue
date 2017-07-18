<template>
  <div id="editor">
    <nav>
        <ol>
            <li v-for="i in [0,1,2,3,4,5]"
             v-bind:class="{active: currentTab === i}"
             v-on:click="currentTab = i">
                <svg class="icon">
                    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                </svg>
            </li>
        </ol>
    </nav>
    <ol class="panes">
        <li v-bind:class="{active:currentTab === 0}">
            <h2>个人信息</h2>
            <el-form :model="profile">
                <el-form-item label="名称">
                    <el-input v-model="profile.name"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                    <el-input v-model="profile.city"></el-input>
                </el-form-item>
                <el-form-item label="出生">
                    <el-input v-model="profile.birth"></el-input>
                </el-form-item>
            </el-form>
        </li>
        <li v-bind:class="{active:currentTab === 1}">
            <h2>工作经历</h2>
            <el-form>
                <div v-for="work in workHistory">
                    <el-form-item label="公司">
                        <el-input v-model="work.company"></el-input>
                    </el-form-item>
                    <el-form-item label="工作内容">
                        <el-input v-model="work.content"></el-input>
                    </el-form-item>
                </div>
            </el-form>
        </li>
        <li v-bind:class="{active:currentTab === 2}">
            <h2>学习经历</h2>
        </li>
        <li v-bind:class="{active:currentTab === 3}">
            <h2>项目经历</h2>
        </li>
        <li v-bind:class="{active:currentTab === 4}">
            <h2>获奖情况</h2>
        </li>
        <li v-bind:class="{active:currentTab === 5}">
            <h2>联系方式</h2>
        </li>
      </ol>
  </div>
</template>

<script>
  export default {
    data(){
        return {
            currentTab: 0,
            icons: ['shenfenzheng','work','book','project','jiangbei','phone'],
            profile:{
                name:'',
                city:'',
                birth:''
            },
            workHistory: [
                {company: '', content: ''}
            ]
        }
    }
}
</script>


<style lang="scss">
    #editor{
        min-height: 100px;
        display: flex;
        nav {
            background: #000;
            width: 80px;
        }
        nav > ol > li {
            padding: 16px 0;
            text-align: center;
            > .icon {
                width: 24px;
                height: 24px;
                fill: white;
            }
            &.active{
                background: white;
                > .icon {
                    fill: black;
                }
            }
        }
        .panes {
            > li {
                display: none;
                padding:32px;
                min-width:20em;
            }
            > li.active{
                display: block;
            }
        }
    }

</style>
