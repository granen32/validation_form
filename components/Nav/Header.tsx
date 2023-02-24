type HProps = {
  isAuthenticated: boolean
  onLogout: () => void
}
const Header = ({ isAuthenticated, onLogout }: HProps) => {
  return (
    <header className="absolute top-0 left-0 h-5 flex justify-center content-between px-8">
      <h1>A Typical Page</h1>
    </header>
  )
}

export default Header
