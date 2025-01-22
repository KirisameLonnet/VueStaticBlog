import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

export default new Vuetify({
  theme: {
    dark: prefersDarkScheme, // 根据系统主题偏好设置暗色模式
    themes: {
      dark: {
        primary: '#01579B', // 深蓝色
        secondary: '#424242', // 次色调
        accent: '#FF4081', // 强调色
        anchor: '#8C9EFF', // 链接色
        background: '#0157', // 背景色
        surface: '#1E1E1E', // 表面色
        onPrimary: '#FFFFFF', // 主要颜色上的文本色
        onSecondary: '#FFFFFF', // 次色调上的文本色
        onAccent: '#000000', // 强调色上的文本色
        error: '#FF5252', // 错误色
        info: '#2196F3', // 信息色
        success: '#4CAF50', // 成功色
        warning: '#FB8C00' // 警告色
      },
      light: {
        primary: '#03A9F4', // 浅蓝色
        secondary: '#B3E5FC', // 次色调
        accent: '#FF4081', // 强调色
        anchor: '#0288D1', // 链接色
        background: '#E3F2FD', // 背景色
        surface: '#FFFFFF', // 表面色
        onPrimary: '#FFFFFF', // 主要颜色上的文本色
        onSecondary: '#000000', // 次色调上的文本色
        onAccent: '#FFFFFF', // 强调色上的文本色
        error: '#FF5252', // 错误色
        info: '#2196F3', // 信息色
        success: '#4CAF50', // 成功色
        warning: '#FB8C00' // 警告色
      },
    },
  },
});