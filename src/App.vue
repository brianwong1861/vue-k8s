<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>

<template>
<div id="app">
  <NavHeader></NavHeader>
  <PageContent></PageContent>
<!-- </el-row> -->
</div>
</template>

<script>
import NavHeader from './components/header'
import PageContent from './components/content'

export default {
  name: "app",
  components: {
    NavHeader,
    PageContent
  }
}
</script>


