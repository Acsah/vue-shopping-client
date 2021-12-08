<template>
  <div>
      Search组件
      params参数：{{$route.params.keyword}}
      query参数：{{$route.query.keyword2}}
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style lang="less" scoped>

</style>
