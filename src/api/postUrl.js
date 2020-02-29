// 引入axios 
import axios from '@/utils/myaxios.js'

//登录api

export const getImg = (data) => {
    return axios({
        method: 'post',
        url:'/front/qi-api/upload-img',
        data
    })
}

export const postCompany=(data)=>{
    return axios({
        method:'post',
        url:'/front/qi-api/save-job-record',
        data
    })
}