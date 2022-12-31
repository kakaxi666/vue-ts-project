import axios from 'axios'
import { config } from 'process'
import {inject} from 'vue'
const initAxios = axios.create({
    baseURL: process.env.BASE_API,
    timeout:180000,
    headers: {
		"Content-Type": "application/json;charset=utf-8"
	}
})

initAxios.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})




initAxios.interceptors.response.use((response:any)=>{
    if(response.errCode == 0){
        return Promise.resolve(response.data)
    }else{
        // ElMessage({
        //     message: "Error",
        //     type: 'error',
        //     duration: 5 * 1000
        // })}
        console.log(inject)
}})

export default () => initAxios