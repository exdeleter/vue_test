//some logic
//here create function 
//initialise object - component
import PostForm from "@/components/PostForm/PostForm.vue";
import PostList from "@/components/PostList/PostList.vue";
import axios from "axios";

export default {
    components : {
        PostForm,
        PostList,
    },
    
    data() {
        return { 
            posts : [] ,
            dialogVisible: false,
            isPostsLoading: false,
        }
    },
    methods : {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p=> p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible=true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts =response.data;
                this.isPostsLoading=false;
            } 
            catch (e) {
                alert("ошибка");
            } finally {
                this.isPostsLoading = false;
            }
        },
    },
    mounted() {
        this.fetchPosts();
    }
}