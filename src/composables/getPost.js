import { ref } from "vue";
import {db} from "../firebase/config"
let getPost = (id)=>{
    let post = ref(null);
    let error = ref("");
    let getData = async()=>{
        try {
            let doc=await db.collection("posts").doc(id).get()
            post.value={id:doc.id,...doc.data()}
        } catch (error) {
            console.log(error.message);
        }
    }
    return {post,error,getData};
}
export default getPost;