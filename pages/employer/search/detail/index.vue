<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware({ app, redirect }) {
    return redirect(app.localePath('/employer/search'))
  },
})
</script>

<style scoped></style>
