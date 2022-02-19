import Vue from 'vue/dist/vue.js'


Vue.config.productionTip = false

new Vue({
  data: {
    user: {
      email: 'allen@qq.com',
      nickname: '小明',
      phone: '13333333333'
    }
  },
  computed: {
    displayName: {
      get() {
        const user = this.user
        return user.nickname || user.phone || user.email
      },
      set(value) {
        this.user.nickname = value
      }
    }
  },
  template: `
    <div>
    {{ displayName }}
    <button @click="displayName = '小红'">set</button>
    </div>`
}).$mount('#app')
