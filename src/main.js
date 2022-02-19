import Vue from 'vue/dist/vue.js'


Vue.config.productionTip = false
let id = 0
const createUser = (name, gender) => {
  id += 1
  return {id: id, name: name, gender: gender}
}
new Vue({
  data() {
    return {
      users: [
        createUser('小明', '男'),
        createUser('小红', '女'),
        createUser('小张', '男'),
        createUser('小李', '女'),
      ],
      gender: ''
    }
  },
  computed: {
    displayUsers() {
      const hash = {
        male: '男',
        female: '女'
      }
      const {users, gender} = this
      if (gender === '') {
        return users
      } else if (typeof gender === 'string') {
        return users.filter(u => u.gender === hash[gender])
      } else {
        throw new Error('gender 的值是意外的值')
      }
    }
  },
  methods: {
    setGender(string) {
      this.gender = string
    }
  },
  template: `
    <div>
    <div>
      <button @click="setGender('')">全部</button>
      <button @click="setGender('male')">男</button>
      <button @click="setGender('female')">女</button>
    </div>
    <ul>
      <li v-for="(u,index) in displayUsers" :key="index">{{ u.name }} - {{ u.gender }}</li>
    </ul>
    </div>`
}).$mount('#app')
