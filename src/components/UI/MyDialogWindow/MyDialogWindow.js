export default {
    name: 'my-dialog-window',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    
    methods : {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}