<template>
  <div id="editor">
    <nav>
        <ol>
            <li v-for="i in [0,1,2,3,4,5]"
             v-bind:class="{active: currentTab === i}"
             v-on:click="currentTab = i" v-bind:key="i">
                <svg class="icon">
                    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                </svg>
            </li>
        </ol>
    </nav>
    <ol class="panes">
        <li v-bind:class="{active:currentTab === 0}">
            <ProfileEditor v-bind:profile='profile'/>
        </li>
        <li v-bind:class="{active:currentTab === 1}">
            <ArrayEditor v-bind:items="workHistory" v-bind:labels='{company:"公司",content:"工作内容"}' v-bind:title="'工作经历'"/>
        </li>
        <li v-bind:class="{active:currentTab === 2}">
            <ArrayEditor v-bind:items='studyHistory' v-bind:labels='{school:"学校",duration:"时间",degree:"学位"}' v-bind:title="'学习经历'"/>
        </li>
        <li v-bind:class="{active:currentTab === 3}">
            <ArrayEditor v-bind:items='projects' v-bind:labels='{name:"项目名称",content: "工作内容"}' v-bind:title="'项目经历'"/>
        </li>
        <li v-bind:class="{active:currentTab === 4}">
            <ArrayEditor v-bind:items='awards' v-bind:labels='{name:"获奖名称"}' v-bind:title="'获奖情况'"/>
        </li>
        <li v-bind:class="{active:currentTab === 5}">
            <h2>联系方式</h2>
        </li>
      </ol>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import ArrayEditor from './ArrayEditor'
  export default {
    components:{ProfileEditor,ArrayEditor},
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
            ],
            studyHistory:[
                {school: '',duration: '',degree: ''}
            ],
            projects: [
                {name: '', content: ''}
            ],
            awards: [
                {name: ''}
            ]
        }
    },
    methods:{}
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
             flex:1;
            > li {
                display: none;
                padding:32px;
                min-width:20em;
                height:100%;
                overflow:auto;
            }
            > li.active{
                display: block;
            }
            .container {
                position:relative;
                > .el-icon-delete{
                   position:absolute;
                   right:0;
                   top:0;
                }
            }
        }
    }

</style>
