import { Middleware } from '@nuxt/types'

const admin: Middleware = ({ app, $auth, redirect }) => {
  if ($auth.user && $auth.user.role !== 2) {
    return redirect(app.localePath('/'))
  }
}

export default admin
