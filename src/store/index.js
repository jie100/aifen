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
        userName:'',
        title: '',
        shanghaiBanner: '',
        articleRequestId: '',
        keyWords: '',
        newMessages: [],
        fenlei_index: 1,
        standard_index: 1,
        chacun_key: '',
    },
    mutations: {
        setChaxunKey(state, chacun_key){
            state.chacun_key = chacun_key
        },
        setStandardIndex(state, standard_index){
            state.standard_index = standard_index
        },
        setFenLeiIndex(state, fenlei_index){
            state.fenlei_index = fenlei_index
        },
        setPhone(state, phone){
            state.phone = phone
        },
        setToken(state, token){
            state.token = token
        },
        setUserName(state, name) {
            state.userName = name
        },
        setTitle (state, title) {
            state.title = title
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
