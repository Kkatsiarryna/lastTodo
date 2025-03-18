import { Page404 } from "common/components"
import { createBrowserRouter } from "react-router-dom"
import { App } from "../../app/App"
import { Main } from "../../app/Main"
import { Login } from "../../features/auth/ui/Login/Login"

export const Path = {
  Login: "login",
} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: Path.Login,
        element: <Login />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
])



// export const Path = {
//   Main: '/',
//   Login: 'login',
//   NotFound: '*',
// } as const
//
// export const Routing = () => (
//   <Routes>
//     <Route path={Path.Main} element={<Main />} />
//     <Route path={Path.Login} element={<Login />} />
//     <Route path={Path.NotFound} element={<PageNotFound />} />
//   </Routes>
// )
