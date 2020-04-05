<template>
    <div class="posts-list">
        <h1 class="posts-list__header">Опубликуйте свой пост</h1>
        <post-form class="posts-list__form"></post-form>
        <div class="posts-list__cards">
            <post-card :post="post"></post-card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostForm from '@/components/PostForm.vue';
import PostCard from '@/components/PostCard.vue';


@Component({
    components: {
        PostForm,
        PostCard
    },
})
export default class PostsList extends Vue {
    post:object = {
        title: 'test',
        text: "adasdadsasdasdasd",
        createdAt: '22.23.33'
    }
    
}

</script>

<style lang="scss">
.posts-list {
    position: relative;
    max-width: 60rem;
    margin: 0 auto;
    &__header {
        text-align: center;
    }
    &__form {
        margin-bottom: 3.2rem;
    }
}
</style>