<template>
    <div class="card text-center">
        <div class="card-header">
            {{name}}
        </div>
        <div class="card-body">
            <h4 class="card-title">This is Dashboard Title</h4>
            <p class="card-text">Card with a header and a footer.</p>
        </div>
        <div class="card-footer">
            Card Footer
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                name: 'Dashboard Component'
            }
        }

    }
</script>

<style scoped>

</style>