export default {
    name: "my-select",
    props : {
        modelValue: {
            type: String,
        },
        options : {
            type: Array,
            default: ()=> []
        },
    },
    
    methods : {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}