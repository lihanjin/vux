// import axios from 'axios';
// import qs from 'qs';
// import api from '@/api'

// let path = api.path;
// let ext = api.ext;

// export default {

//   /**
//    * 登出
//    * @returns {AxiosPromise}
//    */
//   logout() {
//     return axios({
//       method: 'post',
//       url: `${path}logout${ext}`
//     });
//   },

//   /**
//    * 我的账户
//    * @returns {AxiosPromise}
//    */
//   fundOverview() {
//     return axios({
//       method: 'post',
//       url: `${path}fundOverview${ext}`
//     });
//   },

//   /**
//    * 修改Email
//    * @param params
//    * @returns {AxiosPromise}
//    */
//   updateEmail(params) {
//     return axios({
//       method: 'post',
//       url: `${path}setCustomerEmail${ext}`,
//       data: qs.stringify(params)
//     });
//   },

//   /**
//    * 修改密码
//    * @param params
//    * @returns {AxiosPromise}
//    */
//   updatePassWord(params) {
//     return axios({
//       method: 'post',
//       url: `${path}updatePassWord${ext}`,
//       data: qs.stringify(params)
//     });
//   },

//   /**
//    * 银行卡详情
//    * @param params
//    * @returns {AxiosPromise}
//    */
//   getDictConfigInfo(params) {
//     return axios({
//       method: 'post',
//       url: `${path}getDictConfigInfo${ext}`,
//       data: qs.stringify(params)
//     });
//   },


//   /**
//    * 根據國家获取对应的省份
//    * @param params
//    * @returns {AxiosPromise}
//    */
//   getProvincesByCountry(params) {
//     return axios({
//       method: 'post',
//       url: `${path}getProvincesByCountry${ext}`,
//       data: qs.stringify(params)
//     });
//   },

//   /**
//    * 根据省获取对应的市
//    * @param params
//    * @returns {AxiosPromise}
//    */
//   getCitiesByProvince(params) {
//     return axios({
//       method: 'post',
//       url: `${path}getCitiesByProvince${ext}`,
//       data: qs.stringify(params)
//     });
//   },

//   /**
//    * 银行卡详情
//    * @returns {AxiosPromise}
//    */
//   bankDetails() {
//     return axios({
//       method: 'post',
//       url: `${path}bankDetails${ext}`
//     });
//   },

//   /**
//    * 添加银行卡资料
//    * @param params
//    * @returns {AxiosPromise}
//    */
//   addBankDetail(params) {
//     return axios({
//       method: 'post',
//       url: `${path}addBankDetail${ext}`,
//       data: qs.stringify(params)
//     });
//   },

//   /**
//    * 文件上传信息
//    * @returns {AxiosPromise}
//    */
//   uploadFile() {
//     return axios({
//       method: 'post',
//       url: `${path}uploadFile${ext}`
//     });
//   },
// }
