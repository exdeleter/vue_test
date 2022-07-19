// @vue/component
import axios from "axios";

export default {
    name: 'post-id-page',

    data() {
        return {
            post : {
                title: '',
                body: '',
            },
            id: 1,
        }
    },
    
    methods : {
        async fetchPosts() {
            try {
                console.log(this);
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${this.id}`);
                this.post = response.data;
            } catch (e) {
                alert("ошибка");
            }
        },
    },
    mounted() {
        this.fetchPosts();
    }
}
