import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Login from "@/components/login";
import Register from "@/components/register";
import ShangHai from "@/components/shanghai";
import Ghxc from "@/components/ghxc";
import Message from "@/components/message";
import Member from "@/components/member";
import Personal from "@/components/personal";
import Consult from "@/components/consult";
import ShangHaiArticle from "@/components/shanghai_article"
import Article from "@/components/article"
import Survey from "@/components/survey"
import Union from "@/components/union"
import Achievements from "@/components/achievements"
import List from "@/components/list"

Vue.use(Router);

export default new Router({
  mode: "history",
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
      path: "/shanghai_article",
      name: "shanghai_article",
      component: ShangHaiArticle,
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
      path: "/union",
      name: "union",
      component: Union,
      meta: { 
        keepAlive: true 
      }
    },
    {
      path: "/achievements",
      name: "achievements",
      component: Achievements,
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
