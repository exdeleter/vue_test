import PostItem from "@/components/PostItem/PostItem.vue";

export default {
    components : {
        PostItem
    },
    
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}

