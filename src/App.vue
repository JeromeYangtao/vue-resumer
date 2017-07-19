<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  name: 'app',
  data() {
    return{
      previewMode:false,
      resume: {
        profile:{
            name:'',
            city:'',
            birth:''
        },
        workHistory: [
            {company: '', content: ''}
        ],
        studyHistory: [
            {school: '',duration: '',degree: ''}
        ],
        projects: [
            {name: '', content: ''}
        ],
        awards: [
            {name: ''}
        ],
        contacts: {email: '',phone: '',qq: '',wechat: ''}
      }
    }  
  },
  components: {
    Topbar,Editor,Preview
  },
  methods:{
    preview(){
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    }
  }
}
</script>

<style lang="scss">
  html,body,#app{
    height: 100%;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* 兼容性 */
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
  }
  .topbar{
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  main{
    display: flex;
    flex: 1;
    background: #ddd;
    > .editor{
      width: 40em;
      margin: 16px 8px 16px 16px;
      background: white;
      border-radius: 4px; 
      overflow: auto;
    }
    > .preview{
      flex: 1;
      margin: 16px 16px 16px 8px;
      background: white;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 4px; 
      overflow: auto;
    }
  }
  .previewMode #topbar {
      display: none;
  }
  .previewMode #editor {
      display: none;
  }
  .previewMode #preview {
      max-width: 800px;
      margin: 32px auto;
  }
  #exitPreview {
    display: none;
  }
  .previewMode #exitPreview{
    display: inline-block;
    position: fixed;
    bottom: 16px;
    right: 16px;
  }
</style>
