<template>
  <div class="main message">
    <ul class="message_list">
      <li class="message_box" v-for="item in messagesList" :key="item.asker_words">
        <div class="row">
          <!-- <div class="col-2">
                  <img class="head_pic" :src="item.imgSrc">
          </div>-->
          <div class="col-10 wechat_name">{{ getUserName }}</div>
        </div>
        <div class="col-12 asker_info" v-if="item.asker_words">
          <span class="green">{{ "#管理员#" }}</span>
          <span>{{ item.asker_words }}</span>
        </div>
        <div class="col-12" v-if="item.reply">
          <p class="reply">{{ "管理员回复: " + item.reply }}</p>
        </div>
      </li>
    </ul>
    <div class="leaving_message_box">
      <div class="to_write_message" v-show="!toWriteMessage">
        <span class="leaving_click" @click="toWrite">
          <i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
          <span class="green fz-14">我要写留言</span>
        </span>
      </div>
      <div class="send_message_box" v-show="toWriteMessage">
        <div class="controll_btns">
          <button class="cancel" @click="cancel">取消</button>
          <button class="send green" @click="sendMessage">确认</button>
        </div>
        <textarea
          class="write_message fz-14"
          name="write_message"
          id="write_message"
          ref="write_message"
          placeholder="请理性思考，文明留言：）"
          v-model="message"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../store/api";
import cookie from "../cookie";

export default {
  data() {
    return {
      toWriteMessage: false,
      message: "",
      name: this.$store.state.userName,
      messagesList: [],
      newMessages: []
    };
  },
  mounted() {
    let newMessages = this.$store.state.newMessages;
    api.recieveAllMessage().then(res => {
      if (res.status === 200) {
        this.messagesList = [];
        const data = res.data;
        data.forEach((item, i) => {
          if (newMessages && newMessages.length > 0) {
            let flag = false;
            newMessages.forEach(subItem => {
              if (subItem.bbsId === item.bbsId) {
                flag = true;
                return false;
              }
            });
            if (!flag) {
              const content = {
                asker_words: item.content,
                reply: item.revContent
              };
              this.messagesList.push(content);
            }
          } else {
            const content = {
              asker_words: item.content,
              reply: item.revContent
            };
            this.messagesList.push(content);
          }
        });
        this.messagesList = newMessages.concat(this.messagesList);
      }
    });
  },
  activated() {
    const token = this.$store.state.token || cookie.getCookie('token');
    if (token) {
      api.reply().then(res => {
        if (res.status === 200) {
          const newMessages = res.data;
          if (newMessages && newMessages.length > 0) {
            const saveMessage = this.messagesList;
            this.messagesList = [];
            saveMessage.forEach((item, i) => {
              let flag = false;
              newMessages.forEach(subItem => {
                if (subItem.bbsId === item.bbsId) {
                  flag = true;
                  return false;
                }
              });
              if (!flag) {
                this.messagesList.push(item);
              }
            });
            this.messagesList = newMessages.concat(this.messagesList);
          }
        }
      });
    }
  },
  methods: {
    toWrite() {
      const token = this.$store.state.token || cookie.getCookie("token");

      if (token) {
        this.toWriteMessage = true;
      } else {
        alert("请先登录！");
        this.$router.push("/login");
      }
    },
    cancel() {
      this.toWriteMessage = false;
    },
    sendMessage() {
      const data = {
        content: this.message
      };
      if (data.content.trim() && data.content.trim().length > 0) {
        api.sendMessage(data).then(res => {
          if (res.status === 200) {
            const newMessage = {
              asker_name: "jackson",
              asker_words: data.content,
              reply: null
            };
            this.messagesList.unshift(newMessage);
            this.toWriteMessage = false;
          }
        });
      }else{
        alert("请先填写留言！")
      }
    }
  },
  computed: {
    getUserName() {
      return this.$store.state.userName;
    }
  },
  destroyed() {
    this.$store.commit("setNewMessage", []);
  }
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.message {
  background: #f2f2f2;
  overflow: auto;
  padding-bottom: 40px;
}

.message_box {
  margin: 15px !important;
  padding: 15px 0;
  background-color: white;
  border-radius: 8px;
}

.message_list {
  overflow: hidden;
}

.head_pic {
  width: 40px;
  height: 40px;
}

.green {
  color: green;
}

.l-h-40 {
  line-height: 40px;
}

.wechat_name {
  font-weight: bolder;
  font-size: 16px;
  line-height: 40px;
}

.asker_info {
  line-height: 1.5em;
  margin: 15px auto;
}

.reply {
  background-color: #eaeaea;
  color: #747474;
  border-radius: 10px;
  padding: 4px 15px;
}

.leaving_message_box {
  position: fixed;
  left: 0;
  bottom: 50px;
  width: 100%;
  background-color: white;
}

.to_write_message {
  padding: 0.5em;
  border-top: 1px solid gray;
}

.leaving_click i {
  margin-top: 2px;
}

.controll_btns {
  background-color: #eaeaea;
  border-radius: 6px;
}

.send {
  float: right;
}

.write_message {
  width: 100%;
  height: 160px;
  padding: 10px;
  outline: none;
  background: none;
  border: none;
  resize: none;
}
</style>


