<template>
  <div id="preview">
      <h1>{{resume.profile.name || '姓名'}}</h1>
      <p>{{resume.profile.city || '城市'}} | {{resume.profile.birth || '出生年月'}}</p>
      <hr>
      <section v-if="filter(resume.projects).length > 0">
         <h2>项目</h2>
         <ul>
             <li v-for="project in filter(resume.projects)" v-bind:key="project.name">
                 {{project.name}} 
                 {{project.content}}
             </li>
         </ul>
      </section>
      <section v-if="filter(resume.workHistory).length > 0">
         <h2>工作经历</h2>
         <ul>
             <li v-for="work in filter(resume.workHistory)" v-bind:key="work.company">
                 {{work.company}} 
                 {{work.content}}
             </li>
         </ul>
      </section>
      <section v-if="filter(resume.studyHistory).length > 0">
         <h2>学习经历</h2>
         <ul>
             <li v-for="study in filter(resume.studyHistory)" v-bind:key="study.school">
                 {{study.school}} 
                 {{study.duration}}
                 {{study.degree}}
             </li>
         </ul>
      </section>
      <section v-if="filter(resume.awards).length > 0">
         <h2>获奖情况</h2>
         <ul>
             <li v-for="award in filter(resume.awards)" v-bind:key="award.name">
                 {{award.name}} 
             </li>
         </ul>
      </section>
      <section>
         <h2>联系方式</h2>
         <ul>
             <li>
                 邮箱:{{resume.contacts.email}} 
                 电话:{{resume.contacts.phone}} 
                 qq:{{resume.contacts.qq}} 
                 微信:{{resume.contacts.wechat}} 
             </li>
         </ul>
      </section>
  </div>
</template>

<script>
  export default {
      props: ['resume'],
      methods:{
          filter(array){ //找出非空对象
              return array.filter(item=> !this.isEmpty(item))
          },
          isEmpty(object){  //只要有一个 value 不是 falsy 则返回 true
          let empty = true
          for(let key in object){
              if(object[key]){
                  empty = false
                  break   
              }
          }
          return empty
      }
      },
      
  }
</script>

<style>
    #preview{
 
    }
</style>