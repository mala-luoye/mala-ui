import Header from "./header/index"
import Footer from "./footer"

interface LayoutProps {
  children?: JSX.Element | string
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
