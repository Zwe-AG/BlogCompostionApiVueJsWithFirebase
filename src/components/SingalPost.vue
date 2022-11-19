<template>
    <div class="post">
            <router-link :to="{name:'detail',params:{id:post.id}}">
              <h2>{{ post.title }}</h2>
            </router-link>
            <p>{{cutPara}}</p>
            <div v-for="tag in post.tags" :key="tag" class="pill">
                <router-link :to="{name:'tag',params:{tag:tag}}">{{tag}}</router-link> 
            </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
    export default {
        props : ['post'],
        setup(props) {
            let cutPara = computed(()=>{
                return props.post.body.substring(0, 10)+".....";
            })
            return {cutPara};
        }
    }
</script>

<style>
 .post {
        margin: 0 auto;
        padding-bottom: 30px;
        width: 600px;
        border-radius: 5px;
        text-align: left;
        background-color: antiquewhite;
      }
      .post h2 {
        padding-top: 20px;
        padding-left: 20px;
        text-transform: uppercase;
        color: black;
        font-size: 26px;
      }
      .post p {
        padding-left: 20px;
        font-size: 30px;
      }
      .pill {
        display: inline-block;
        margin: 10px 10px  0;
        color: #444;
        background: #ddd;
        padding: 5px;
        border-radius: 20px;
        font-size: 8px;
      }
</style>
