<template>
    <HeaderItem>
        <h1>{{title}}</h1>
    </HeaderItem>
</template>

<script>
export default {
    name: 'HeaderItem',
    props: {
        title: String,
    },
}
</script>

<style scoped>
   HeaderItem {
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-bottom: 20px;
   }
</style>