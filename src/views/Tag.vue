<template>
    <div class="post">
        <PostsList :posts="filterdPosts"></PostsList>
    </div>
</template>

<script>
import getPosts from '@/composables/getPosts'
    import PostsList from '../components/PostsList'
import { computed } from '@vue/runtime-core';
export default {
    props:['tag'],
    components: { PostsList },
    setup(props) {
        let {posts,error,getData} = getPosts();
        getData();
        let filterdPosts = computed(()=>{
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag);
            })
        })
        return {filterdPosts,posts,error};
    }
    }
</script>

<style>

</style>
