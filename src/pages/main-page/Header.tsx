import { Link } from "react-router"
import logo from '../../assets/imgs/logo.png'

export default function Header() {
  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/quiz', label: 'ABUSE QUIZ' },
    { to: '/education', label: 'EDUCATION' },
    { to: '/ref-corner', label: 'REF CORNER' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ]

  return (
    <>
      <header className="w-full bg-bg font-(family-name:--font-heading) font-bold">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to='/' className="flex min-w-fit items-center gap-3 sm:gap-4">
            <img className='size-12 rounded-lg sm:size-14' src={logo} alt="A cartoon style referee blowing a whistle" />
            <h3 className="max-w-32 text-[1.35rem] leading-5 sm:text-[1.5rem] sm:leading-6">REF <span className="text-accent">IS HUMAN</span></h3>
          </Link>
          <nav className="hidden items-center justify-between gap-5 text-[1.05rem] xl:flex 2xl:gap-6 2xl:text-[1.2rem]">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden min-w-fit border border-border px-3 py-2 text-center text-base lg:block">
            <p>lvl up component</p>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 text-sm sm:px-6 lg:text-base xl:hidden">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="min-w-fit rounded-lg border border-border px-3 py-2">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mx-auto w-[96%] border border-border justify-self-center" />
      </header>
    </>
  )
}
