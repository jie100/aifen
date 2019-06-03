import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Login from "@/components/login";
import Register from "@/components/register";
import ShangHai from "@/components/shanghai";
import Ghxc from "@/components/ghxc";
import ChaXun from "@/components/chaxun";
import ChaXunResult from "@/components/chaxun_result";
import Standard from "@/components/standard";
import StandardView from "@/components/standard_view";
import Message from "@/components/message";
import MyMessage from "@/components/mymessage";
import Member from "@/components/member";
import Personal from "@/components/personal";
import Consult from "@/components/consult";
import FenLei from "@/components/fenlei";
import FenLeiResult from "@/components/fenlei_result";
import Article from "@/components/article";
import Survey from "@/components/survey";
import List from "@/components/list";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "app",
      redirect: '/home',
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { 
        keepAlive: false 
      }
    },
    {
      path: "/list",
      name: "list",
      component: List,
      meta: { 
        keepAlive: false 
      }
    },    
    {
      path: "/sha",
      name: "sha",
      component: ShangHai,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/ghxc",
      name: "ghxc",
      component: Ghxc,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/chaxun",
      name: "chaxun",
      component: ChaXun,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/chaxun_result",
      name: "chaxun_result",
      component: ChaXunResult,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/standard",
      name: "standard",
      component: Standard,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/standard_view",
      name: "standard_view",
      component: StandardView,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/consult",
      name: "consult",
      component: Consult,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/message",
      name: "message",
      component: Message,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/mymessage",
      name: "mymessage",
      component: MyMessage,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/member",
      name: "member",
      component: Member,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/personal",
      name: "personal",
      component: Personal,
      meta: { 
        keepAlive: false 
      }
    },
    {
      path: "/fenlei",
      name: "fenlei",
      component: FenLei,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/fenlei_result",
      name: "fenlei_result",
      component: FenLeiResult,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/article",
      name: "article",
      component: Article,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/survey",
      name: "survey",
      component: Survey,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
