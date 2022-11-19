<template>
    <form @submit.prevent="addPost">
        <label>Title</label>
        <input type="text" required v-model="title">
        <label>Body</label>
        <textarea required v-model="body"></textarea>
        <label>Tags</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="pushTag">
        <div v-for="tag in tags" :key="tag" class="pill">
            {{tag}}
        </div>
        <button class="button-53">Add Post</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import {db,timestamp} from "../firebase/config"
    export default {
        setup(props) {
            let router = useRouter();
            let title = ref("");
            let body = ref("");
            let tag = ref("");
            let tags = ref([]);
            let pushTag = ()=>{
                if(!tags.value.includes(tag.value)){
                    tags.value.push(tag.value);
                }
                tag.value = "";
            }
            let addPost = async()=>{
              let newPost = {
                        title : title.value,
                        body : body.value,
                        tags : tags.value,
                        created_at : timestamp()
                    };
                let res = await db.collection("posts").add(newPost);
                router.push({name:"home"});
            }
            return {title,body,tags,addPost,tag,pushTag}
        }
    }
</script>

<style scoped>
 form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
.button-53 {
  background-color: #3DD1E7;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 70%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 50px;
  margin-left: 50px;
}

.button-53:focus {
  outline: 0;
}

.button-53:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-53:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-53 {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
}
</style>
