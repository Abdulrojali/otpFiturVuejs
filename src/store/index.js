import {defineStore} from 'pinia'

export const otp=defineStore('otp',{
    state:()=>({
        riwayatOtpGenerate:[],
        dataOtpGenerate:null
    }),
    getters:{

    },
    actions:{
        randomCodeOtp(){
            const otpCode1=parseInt(Math.random()*10)
            const otpCode2=parseInt(Math.random()*10)
            const otpCode3=parseInt(Math.random()*10)
            const otpCode4=parseInt(Math.random()*10)

            const randomOtp={
                otp1:otpCode1,
                otp2:otpCode2,
                otp3:otpCode3,
                otp4:otpCode4
            }
            this.dataOtpGenerate=randomOtp
            this.riwayatOtpGenerate.push(randomOtp)
            console.log(this.riwayatOtpGenerate)
        },
        submitOtpStore(ot1,ot2,ot3,ot4){
            if(
                this.dataOtpGenerate.otp1==parseInt(ot1) &&
                this.dataOtpGenerate.otp2==parseInt(ot2) &&
                this.dataOtpGenerate.otp3==parseInt(ot3) &&
                this.dataOtpGenerate.otp4==parseInt(ot4)
                 ){
                    alert('sukses')
                 }
                 else{
                    alert('failed')
                 }
        }
    }
})