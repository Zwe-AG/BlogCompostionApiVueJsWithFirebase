<template>
  <div class="home">
    <PostsList :posts="posts"></PostsList>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts'
export default {
  components: { PostsList },
  setup(props) {
     let {posts,error,getData} = getPosts();
     getData();
     return {posts,error};
  }
}
</script>
