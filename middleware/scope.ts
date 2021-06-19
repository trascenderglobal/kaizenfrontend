import { Middleware } from '@nuxt/types'

const scope: Middleware = ({ app, $auth, error, redirect }) => {
  if (!$auth.user) {
    return error({
      statusCode: 401,
      message: 'Unauthenticated',
    })
  } else if ($auth.user.role === 0) {
    return redirect(app.localePath('/employer/profile'))
  } else if ($auth.user.role === 1) {
    return redirect(app.localePath('/employee/profile'))
  } else if ($auth.user.role === 2) {
    return redirect(app.localePath('/admin/deals'))
  }
}

export default scope
