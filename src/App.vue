<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If iView is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary" @click="modal1 = true">Button</Button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title">
        <div style="height: 200px;overflow:auto;">
          <div style="height: 150px"></div>
          <Select v-model="selectValue" :transfer="true">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <div style="height: 150px"></div>
        </div>
    </Modal>
  </div>
</template>

<script>
import { Button, Modal, Select, Option } from 'iview'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    Button,
    HelloWorld,
    Modal,
    Select,
    Option
  },
  data () {
    return {
      modal1: false,
      selectValue: '',
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
