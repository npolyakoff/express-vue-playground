<template>
    <div class="post-card" style="border: 2px solid">
        <h3>{{post.title}}</h3>
        <p class="post-card__text">
            {{post.text}}
        </p>
        <span class="post-card__created">{{post.createdAt}}</span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostCard extends Vue {
    @Prop(Object) readonly post!: object;
}
</script>

<style lang="scss">
.post-card {
    position: relative;
    border-radius: $border-radius;
    padding: 2rem;
    margin-bottom: 3.2rem;
    &__text {
        font-size: 1.8rem;
    }
    &__created {
        color: rosybrown;
        position: absolute;
        bottom: 1rem; right: 1rem;
    }
}
</style>