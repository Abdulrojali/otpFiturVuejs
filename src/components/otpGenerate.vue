<script>
import {otp} from '../store/index'
export default{
    setup(){
        const otpStore=otp()
        return{otpStore}
    },
    methods:{
        otpBtn(){
            this.otpStore.randomCodeOtp()
        }
    }
}
</script>
<template>
    <div class="content">
        <button @click="otpBtn">getOtp</button>
    </div>
</template>
<style scoped>
button{
  background-color: blue;
  color: white;
  padding: 5px 6px;
  border: none;
  cursor: pointer;
}</style>
