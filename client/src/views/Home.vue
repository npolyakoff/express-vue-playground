<template>
  <div class="home">
    <posts-list></posts-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsList from '@/components/PostsList.vue';

export default {
  name: 'Home',
  components: {
    PostsList
  }
}
</script>
