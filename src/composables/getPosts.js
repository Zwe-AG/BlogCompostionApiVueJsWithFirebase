import { ref } from '@vue/reactivity'
import {db} from "../firebase/config"
let getPosts = ()=>{
    let posts = ref([]);
    let error = ref("");
    let getData = async ()=>{
        try {
            let response = await db.collection("posts").orderBy("created_at","desc").get();
            posts.value = response.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            })
        } catch (error) {
            error.value=error.message;
        }
    };
     return{posts,error,getData};
}
export default getPosts;