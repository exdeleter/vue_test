//some logic
//here create function 
//initialise object - component
import PostForm from "@/components/PostForm/PostForm.vue";
import PostList from "@/components/PostList/PostList.vue";

export default {
    components : {
        PostForm,
        PostList,
    },
    
    data() {
        return { 
            posts : [
                {
                    id: 1,
                    title : "C#",
                    body: "good language"
                },
                {
                    id: 2,
                    title : "C++",
                    body: "Sed ut perspiciatis, quis nostrum exercitationem"
                },
                {
                    id: 3,
                    title : "C",
                    body: "ghic tenetur a sapiente delectus"
                },
                {
                    id: 4,
                    title : "Ckkss",
                    body: "ghic tenetur a sapiente delectus"
                },
            ],
        }
    },
    methods : {
        createPost(post) {
            this.posts.push(post);
        }
    }
}