export default {
    data() {
        return {
            post : {
                title: '',
                body: ''
            }
        }
    },
    
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title : '',
                body : '',
            };
        },
    },
}

