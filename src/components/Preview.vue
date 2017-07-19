<template>
  <div id="preview">
      <h1>{{resume.profile.name || '姓名'}}</h1>
      <p>{{resume.profile.city || '城市'}} | {{resume.profile.birth || '出生年月'}}</p>
      <hr>
      <section v-if="filter(resume.projects).length > 0">
         {{filter(resume.projects)}}
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