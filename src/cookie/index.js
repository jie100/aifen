//全局cookie设置
const cookie = {
  //设置cookie
  setCookie(c_name, value, expiredays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
      c_name +
      "=" +
      escape(value) +
      (!expiredays ? "" : ";expires=" + exdate.toGMTString());
  },

  //获取cookie
  getCookie(c_name) {
    if (document.cookie.length > 0) {
      let c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        let c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) {
          c_end = document.cookie.length;
        }
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  },

  //清除cookie
  clearCookie(c_name) {
    this.setCookie(c_name, "", -1);
  },

  //检测cookie
  checkCookie(c_name) {
    let result = this.getCookie(c_name);
    if (result && result.length>0) {
      return true;
    } else {
      return false;
    }
  }
}

export default cookie;