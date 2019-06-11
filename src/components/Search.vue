<template>
    <div class="search">
        <mt-search v-model="value"></mt-search>
    </div>
  
</template>
<script>
export default {
    name:'search',
    data() {
        return {
        value: ""
        };
    },
    created() {
        this.$store.state.isShowHeader = false;
    },
  
};

</script>
<style>
   input[type=search]{
       text-align: left !important;
       background: white !important;
       margin-bottom: 0px !important;
       height:28px !important ;
   }
   
</style>

