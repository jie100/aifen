/**
 * Created by eric on 1/1/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //定义state属性
        phone:'',
        token: '',
        isLogined: false,
        userName:'',
        showHeader: false,
        showFooter: true,
        title: '',
        subTitle: '',
        shanghaiBanner: '',
        articleRequestId: '',
        keyWords: '',
        newMessages: [],
    },
    mutations: {
        setPhone(state, phone){
            state.phone = phone
        },
        setToken(state, token){
            state.token = token
        },
        showHeader (state, hasHeader) {
            state.showHeader = hasHeader
        },
        setFooter (state, hasFooter) {
            state.showFooter = hasFooter
        },
        setUserName(state, name) {
            state.userName = name
        },
        setTitle (state, title) {
            state.title = title
        },
        setLogin( state, isLogined ){
            state.isLogined = isLogined
        },
        setSubTitle (state, title) {
            state.subTitle = title
        },
        setShangHaiBanner (state, src) {
            state.shanghaiBanner = src
        },
        setArticleRequestId(state, id) {
            state.articleRequestId = id
        },
        setKeyWords(state, keyWords) {
            state.keyWords = keyWords
        },
        setNewMessage(state, newMessages){
            state.newMessages = newMessages
        }
    },
    
})

export default store
