<template>
    <div :class="['modal', {'is-active': isActive}]">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"><slot name="title"></slot></p>
                <button class="delete" aria-label="close" @click="toggle(false)"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toggle(val) {
            this.isActive = val
        }
    },
    data() {
        return {
            isActive: false
        }
    }
}
</script>
