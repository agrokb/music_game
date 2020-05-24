<template>
  <div class="hello">
      home
  </div>
</template>

<script>
import qs from 'querystring';
export default {
  name: 'home',
  methods:{
     getToken(){
         const config = {
             headers:{
                 Accept:'application/x-www-form-urlencoded',
                 'Content-Type': 'application/x-www-form-urlencoded'
             },
         };
         const oauth = {
             grant_type:'client_credentials',
             client_id:'30cb295958e441eea1a7ea6de71bb4cf',
             client_secret:'dcae7a6382dd42c6699a1fd748de4bc4'
         };
         this.$http.post('/token',qs.stringify(oauth),config)
         .then((res)=>{
             console.log(res);
         });
     },
  },
　created(){
        this.getToken();
        console.log('12')
     }
};
</script>

