<template>
    <div v-if="isShow" :class="'notification position-top'">
        <button @click="toggle(false)" class="delete"></button>
        <h1><strong>{{ title }}</strong></h1>
        <span>
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        title: { type: String, default: null }
    },

    methods: {
        toggle(val) {
            this.isShow = val
            setTimeout(() => {
                this.isShow = false
            }, 3000)
        }
    },
    data() {
        return {
            isShow: false,
        }
    }
}
</script>
<style lang="scss" scoped>
.position-top {
    width: 30em;
    height: 10em;
    position: fixed;
    bottom: 1em;
    left: 1em;
    z-index: 100;
    overflow-y: scroll;
}

.hide {
    display: none;
}
</style>
