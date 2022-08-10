import {  ref } from 'vue'
import MyButton from "@/components/UI/MyButton/MyButton.vue";
import axios from "axios";

export default {
    name: 'DepartmentPage',
    components: {
        MyButton
    }, 
    
    setup() {
        const data = ref(addBook());

        let department = {
            departmentName : "",
            departmentId: 0,
        };

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
                //TODO выводить ошибки в всплывающем окне, а не в консоли
                console.log(e)
            }
        }

        async function reload(){
            data.value = addBook()
        }

        async function addDepartment() {
            try {
                const response = await axios.post('http://localhost:7275/api/Department', department)
                data.value = response.data
            } catch (e) {
                alert(e.message)
            }
            
            await reload()
        }

        return {
            columns,
            data,
            department,
            addDepartment,
        }
    }

}
