import { Middleware } from '@nuxt/types'

const employee: Middleware = ({ app, $auth, redirect }) => {
  if ($auth.user && $auth.user.role !== 1) {
    return redirect(app.localePath('/'))
  }
}

export default employee
