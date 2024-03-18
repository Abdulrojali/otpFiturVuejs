<script>
import otpGenerateComponent from './components/otpGenerate.vue';
import outputGenerate from './components/outputGenerate.vue';
import inputGenerate from './components/inputGenerate.vue';
export default{
  components:{
    otpGenerateComponent,
    outputGenerate,
    inputGenerate
  }
}
</script>

<template>
  <div class="container">
    <div class="otp">
      <h3>input Otp Code</h3>
  <inputGenerate></inputGenerate>
  <div class="output">
    <h3>Otp Code</h3>
        <outputGenerate></outputGenerate>
        <otpGenerateComponent></otpGenerateComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.otp{
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
border: 1px solid black;
}
.output{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  top: auto;
  left: 40px;
}
</style>
