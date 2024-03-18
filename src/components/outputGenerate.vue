<script>
import {otp} from '../store/index'
export default{
    setup(){
        const otpStore=otp()
        return{otpStore}
    }
}
</script>

<template>
    <div class="content">
        <h3 
        v-for="(data,index) in otpStore.dataOtpGenerate"
        :key="index"
        >
        {{data}}
    </h3>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.content{
    display: flex;
    gap: 30px;
}
</style>