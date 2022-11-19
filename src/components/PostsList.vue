<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <SingalPost :post="post"></SingalPost>
        </div>
    </div>
</template>

<script>
    import SingalPost from './SingalPost'
export default {
    props :['posts'],
  components: { SingalPost },
        
    }
</script>

<style>

</style>
