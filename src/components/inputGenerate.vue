<script>
import {otp} from '../store/index'
export default{
    data(){
        return{
            otp1:null,
            otp2:null,
            otp3:null,
            otp4:null,
        }
    },
    setup(){
        const otpStore=otp()
        return{otpStore}
    },
    methods:{
        submitOtp(){
            if(this.otp1==='' || this.otp2==='' || this.otp3==='' || this.otp4===''){
            }
            else{
                this.otpStore.submitOtpStore(this.otp1,this.otp2,this.otp3,this.otp4)
            }
        }
    }
}
</script>
<template>
    <div class="content">
<input type="text" placeholder="1" v-model="otp1">
<input type="text" placeholder="2" v-model="otp2">
<input type="text" placeholder="3" v-model="otp3">
<input type="text" placeholder="4" v-model="otp4">
    </div>
    <button @click="submitOtp">submit</button>
</template>

<style scoped>
.content{
    display: grid;
    width:50%;
    grid-template-columns:25% 25% 25% 25%;
    grid-gap: 4px;
    justify-content: center;
    align-items: center;
}
input{
    padding: 10px 5px;
}
button{
  background-color: blue;
  color: white;
  padding: 5px 6px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
}
</style>