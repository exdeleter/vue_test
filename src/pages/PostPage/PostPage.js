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
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'},
            ]
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
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }});
                this.totalPages = Math.ceil(response.headers['x-total-count']/ this.limit);
                this.posts = response.data;
                this.isPostsLoading=false;
            }
            catch (e) {
                alert("ошибка");
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }});
                this.totalPages = Math.ceil(response.headers['x-total-count']/ this.limit);
                this.posts = [...this.posts, ...response.data];
            }
            catch (e) {
                alert("ошибка");
            }
        },
    },
    mounted() {
        this.fetchPosts();
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        //arrow function dont lose context
        const callback = (entries, observer)  => {
            if(entries[0].isIntersecting && this.page < this.totalPages) {
                this.loadMorePosts()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    },
    computed : {
        sortedPosts() {
            return[...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]
                    ?.localeCompare(post2[this.selectedSort]);
            })
        },
        sortedSearchedPosts() {
            return this.sortedPosts.filter(post =>
                post.title
                    .toLowerCase()
                    .includes(this.searchQuery
                        .toLowerCase()));
        }
    },
    // //отрабатывает при смене страницы
    // watch : {
    //     page() {
    //         this.fetchPosts();
    //     }
    // }
    // watch : {
    //     //сортирует массив
    //     selectedSort(newValue) {
    //         this.posts.sort((post1, post2) => {
    //             return post1[newValue]?.localeCompare(post2[newValue]);
    //         })
    //     },
    // }
}