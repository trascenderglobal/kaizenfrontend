import { Middleware } from '@nuxt/types'

const employer: Middleware = ({ app, $auth, redirect }) => {
  if ($auth.user && $auth.user.role !== 0) {
    return redirect(app.localePath('/'))
  }
}

export default employer
