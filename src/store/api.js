/**
 * Created by eric on 1/1/19.
 */
import axios from "axios";
import store from "./index.js";

//全局请求拦截
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
        const token = store.state.token;
        config.headers.token = token;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

//全局响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response) {
      alert(err.response.data);
    }
    return err.response;
  }
);

const host = "http://39.98.78.200:8081/api/";
const doApi = {
  // 注册
  REGISTER: "user/register",
  //获取验证码
  CODE: 'user/code',
  // 提交登陆接口
  LOGIN: "user/login",
  //退出登录
  LOGIN_OUT: "user/loginOut",
  //用户信息
  USER_INFO: "user/info",
  //搜索
  SEARCH: "content/search",
  //文章列表
  ARTICLE_LIST: "content/query",
  //文章详情
  ARTICLE_CONTENT: "content/detail",
  //发送留言
  SEND_MESSAGE: "bbs/create",
  //共和新村&上海详情
  CHAXUN: 'column/query',
  //留言接收
  RECEIVE_ALL_MESSAGE: 'bbs/queryAll',
  //最新回复
  REPLY: 'bbs/query',
  //我的留言
  MY_MESSAGE: 'bbs/queryMyBbs',
  //查询小区
  CHAXUNXIAOQU: 'search/street',
};

const fetch = function(url, data, method) {
  if (method === "get") {
    url += data;
    data = null;
  }
  return axios[method](url, data).then(response => {
    return response;
  });
};

const api = {
  //get Code
  getCode(phone) {
    const data = "?phone="+phone;
    return fetch(host + doApi.CODE, data, "get");
  },
  // 注册
  register(data) {
    return fetch(host + doApi.REGISTER, data, "post");
  },
  // 登陆信息
  login(data) {
    return fetch(host + doApi.LOGIN, data, "post");
  },
  // 退出登陆
  loginOut(data) {
    return fetch(host + doApi.LOGIN_OUT, data, "post");
  },
  //用户信息
  getUserInfo(data) {
    return fetch(host + doApi.USER_INFO, data, "post");
  },
  //搜索
  search(keyWords) {
    const data = "?name=" + keyWords;
    return fetch(host + doApi.SEARCH, data, "get");
  },
  // 文章列表
  getArticlrList(id, pageNumber) {
    const data = "?columnId=" + id + "&pageNumber=" + pageNumber;
    return fetch(host + doApi.ARTICLE_LIST, data, "get");
  },
  //文章详情
  getArticlrContent(id) {
    const data = "?contentId=" + id;
    return fetch(host + doApi.ARTICLE_CONTENT, data, "get");
  },
  //留言
  sendMessage(data) {
    return fetch(host + doApi.SEND_MESSAGE, data, "post");
  },
  //共和新村(上海垃圾分类)详情
  chaxun(id) {
    const data = "?columnId=" + id;
    return fetch(host + doApi.CHAXUN, data, "get");
  },
  //所有留言
  recieveAllMessage(data){
    return fetch(host + doApi.RECEIVE_ALL_MESSAGE, data, "post");
  },
  //检查回复未读留言
  reply(data){
    return fetch(host + doApi.REPLY, data, "post");
  },
  //查询我的留言
  myMessage(data){
    return fetch(host + doApi.MY_MESSAGE, data, "post");
  },
  //查询小区
  chaxunXiaoQu(keyWords) {
    const data = "?name=" + keyWords;
    return fetch(host + doApi.CHAXUNXIAOQU, data, "get");
  },
};
export default api;
