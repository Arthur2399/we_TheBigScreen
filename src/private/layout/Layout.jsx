import { Menu } from "./containers/Menu"

export const Layout = ({ children}) => {
  return (
    <>
        <Menu/>
        {children}
    </>
  )
}
