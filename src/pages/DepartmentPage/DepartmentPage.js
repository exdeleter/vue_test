// @vue/component
import {  ref, reactive } from 'vue'

import MyButton from "@/components/UI/MyButton/MyButton.vue";
import axios from "axios";

export default {
    name: 'DepartmentPage',
    components: {
        MyButton
    }, 
    
    setup() {
        const data = ref(addBook());

        const columns = [
            {
                name: "Номер отдела",
                field: "departmentId"
            },
            {
                name: "Название отдела",
                field: "departmentName"
            }
        ]
        async function addBook() {
            try {
                const response = await axios.get('http://localhost:7275/api/Department')
                data.value = response.data
            } catch (e) {
                console.log(e)
            }
        }
        
        return {
            columns,
            data,
        }
    }

}
