// 引入axios 
import axios from '@/utils/myaxios.js'

//获取数据

export const getData = (data) => {
    return axios({
        method: 'POST',
        url:'/front/qi-api/get-job-record',
        data
    })
}