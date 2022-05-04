<template>
    <HeaderItem>
        <h1>Task Tracker</h1>
    </HeaderItem>
</template>

<script>
export default {
    name: 'HeaderItem',
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