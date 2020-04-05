<template>
    <form class="post-form">
        <div class="post-form__wrapper">
            <h3>Тема:</h3>
            <input type="text" v-model="postTitle" placeholder="напишите здесь" class="post-form__input">
            <h3>Описание:</h3>
            <textarea v-model="postText" class="post-form__text"></textarea>
        </div>
        <button @click="sendPost" :disabled="disbled" type="button" class="post-form__btn">опубликовать</button>
    </form> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PostForm extends Vue {
    postTitle: string = '';
    postText: string = '';
    loading: boolean = false;
    get disbled() {
        return !this.postTitle || !this.postText || this.loading;
    }
    async sendPost() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 1500);
    }
}
</script>

<style lang="scss">
.post-form {
    position: relative;
    margin: 0 auto;
    max-width: 60rem;
    border-radius: $border-radius;
    box-shadow: 0 0.2rem 1rem gray;
    padding-bottom: 4.8rem;
    &__wrapper {
        padding: 2rem 10%;
        text-align: center;
    }
    &__btn {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        background-color: $blue;
        color: $white;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        height: 4.8rem;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 0 0 $border-radius $border-radius;
        transition: all 0.15s ease-in;
        &:hover {
            cursor: pointer;
        }
        &:disabled {
            background-color: $dark;
            cursor: pointer;
        }
    }
    &__input {
        background-color: rgba($color: $dark, $alpha: 0.1);
        padding: 0 2rem;
        font-size: 2.2rem;
        margin-bottom: 2rem;
        border-radius: $border-radius $border-radius 0 0;
        line-height: 200%;
        width: 100%;
        border: none;
        outline: none;
        border-bottom: 0.1rem solid $blue;
        transition: all 0.15s ease-in;
        &:hover, &:focus {
            background-color: $white;
        }
    }
    &__text {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        min-height: 6rem;
        font-size: 1.8rem;
        line-height: 1.5;
    }
}
</style>