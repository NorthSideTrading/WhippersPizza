import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll for anchor links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-white shadow-md py-4'}`}>
      <nav aria-label="Main" className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="h-12 w-auto bg-contain bg-no-repeat bg-center" style={{ 
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZWxsaXBzZSBjeD0iMTIwIiBjeT0iMTIwIiByeD0iMTIwIiByeT0iMTIwIiBmaWxsPSIjOTgyOTIwIi8+PHBhdGggZD0iTTYyLjM5OSA5Ny42NDNjLTEuNDg0LTIuNzE4LTMuNTM1LTQuNDIyLTYuOTgzLTQuMzljLTEuODE2LjE2My0zLjQ0Ljk0OC00Ljg0OCAyLjEyNWE5LjU5OCA5LjU5OCAwIDAwLTIuODI2IDQuNDdjLTEuMDAzIDMuMzQzLS41NTYgNi41NiAxLjUyMyA5LjQzMyAxLjQzIDEuOTcgMy44MDYgMi44OTIgNi4zOTQgMi4zOTIgMi42NzQtLjU0OSA0LjczMy0yLjUzNiA1Ljg5LTUuMjMgMS4zOTMtMy40NTIgMS4zMzQtNi41MjMuODUtOC44ek0xODUuMjEzIDg1LjUzNmMtMS4yNTMtMy4yNjUtMy44Ni01LjM5LTYuOTM1LTUuOTI1LTMuODI2LS42NjYtNy43NzYgMS42MTEtOS41MDcgNS41LTEuODkgNC4yMzgtLjk3OCA5LjUgMi4yNzggMTIuODUgMi43MzMgMy40MTcgNi43NiA0LjczIDEwLjQxNiAzLjQzNiA0LjI0OS0xLjUgNi42NzUtNi40MTcgNS44OTYtMTEuOTQzYTEyLjM5NCAxMi4zOTQgMCAwMC0yLjE0OC0zLjkxOHpNMTI0Ljk0MSA3Ni45OTRjNC42NTMtLjQwNyA3LjE2LTUuMjgyIDYuMDUyLTkuNTk3LS45OTYtNC4zMi00LjM1Ni03LjQ1Ni04LjcwMi03LjQ1Ni00LjI5OCAwLTcuOTU0IDMuMTc5LTguNzg3IDcuNDc3LS45NzQgNC44NjMgMi44MTggOS44NjYgOC40NDcgOS44NjYuMzM3LS4wMDQuNjY0LS4wMjguOTktLjA3NnYtLjIxNHoiIGZpbGw9IiM5ODI5MjAiLz48cGF0aCBkPSJNNTQuNTcyIDEyNi45NTRDNTguODYgMTIxLjQzOCA2My40MTEgMTE2LjIzIDY4LjA0NiAxMTFjNC41MiA1LjE0MiA4Ljk4NCAxMC4zNDUgMTMuMzk3IDE1LjU5M2ExMDkuOTA2IDEwOS45MDYgMCAwMDIuMjE0IDIuNTk5Yy4xNjUuMTg0LjU0Ni4zNjQuNDYyLS4xMDgtLjE2LTEuNDgzLS4wNzUtMy0uMjM2LTQuNDkxLS4xNi0xLjQ5Mi0uMzUtMi45NzctLjU2Mi00LjQ1OS0uMjEzLTEuNDg2LS40NTgtMi45Ny0uNzE4LTQuNDQ2LS45NzgtNS4zOS0yLjE0LTEwLjc1Ny0zLjI3OC0xNi4xMzMgNC4xOS0uMjAzIDguMzgtLjM0IDEyLjU2My0uNDU1IDEuMzkyLS4wNjIgMi43ODMtLjA4MyA0LjE3NC0uMTA0IDMuMzA2LS4wNDIgNi42MTIuMDc2IDkuOTE3LjE2IDE0LjI1LjM4NSAyOC40NSAxLjk0NiA0Mi42MjMgMi45MiAxMC4wOTcuNzUzIDIwLjIyNS45NzUgMzAuMzQ2LjAyOSA1LjMxLS41ODcgMTAuNTYtMS41ODIgMTUuNzg1LTIuNjkzIDEuNDM3LS4wNzUgMi44NzQtLjE0NyA0LjMxMS0uMjE4LjI0OC0uMDEyLjQ5MyAyLjcxNy42NDkgNi4wOC4xMzggNC4xODMuMDQgOC4zNzQtLjMzMyAxMi41MzNhMjQuNTkxIDI0LjU5MSAwIDAxLS41OCAzLjM5NGMtLjE2Ni41NzYtLjM2IDEuMTQ1LS41OTcgMS42OThhMjQuNzY2IDI0Ljc2NiAwIDAxLTEuMTExIDIuMzRjLTEuNTI1IDIuODMyLTMuNTYgNS4zNjYtNi4wODUgNy4zNDJhMjMuODY3IDIzLjg2NyAwIDAxLTIuMDAxIDEuNDQgMjQuOTIgMjQuOTIgMCAwMS0yLjM1IDEuMzNjLTEuOTU3LjkzMy00LjA4MiAxLjctNi4yODYgMi4wNzYtMi45NjguNDg2LTYuMDI2LjM0Mi04Ljk2Ni0uMzQtOS4yNDEtMi44OTMtMTEuODI4LTEyLjgxOC0xNS42ODctMjAuNTI0LTIuOTI0LTYuMDI2LTcuNDcyLTExLjI2Mi0xMy41NDMtMTQuNDg0LTYuMDkzLTMuMjA1LTEzLjI1My0zLjgyNy0xOS45NTgtMi4wNzYtMTMuMTc3IDQuMjI0LTE5Ljk0IDE2LjE2Ni0yNC45MTMgMjguNDIzLTEuNDggMy41NTgtMi44NiA3LjIxOC01LjA0IDEwLjQwNC0yLjEyMyAzLjA4OS02LjA1MyA0LjYxNi05LjQ4OSAzLjMxNi0zLjI1NC0xLjE2NC01LjQ4OC00LjUtNS4wOTQtOC4wMDcuMTU0LTIuMTg3IDEuMjU5LTQuMjIxIDIuODc3LTUuNzM0IDEuNTA4LTEuNDY1IDIuOTE4LTIuNjg4IDUuMTAyLTIuNjgxIDEuNTEzLjA3NyAyLjkwNi42ODUgMy45ODYgMS43MjguMDk0LjEuMTk3LjE5LjMwOS4yNy4zMTcuMjI4LjY4NS4zNzUgMS4wNi40MDEuMzczLjAyNy43NS0uMDQ5IDEuMDgtLjIzNGwtLjAwMi0uMDAyYy4zMjctLjIxLjU5NC0uNTIuNzYtLjg4NC4xNjgtLjM2NC4yMy0uNzcuMTgtMS4xNzItLjA1LS40MDItLjIwMy0uNzg2LS40My0xLjExLS43MzYtMS4wNDQtMS42NDItMS45OTgtMi42NzYtMi43NjJhMTMuMjc5IDEzLjI3OSAwIDAwLTYuMTcxLTIuNTU1Yy0xLjExNi0uMTc0LTIuMjUzLS4yMTYtMy4zOC0uMTIzYTEzLjYxNSAxMy42MTUgMCAwMC0zLjMyNC42OTRjLTQuMTY4IDEuNDc1LTcuMzcgNC45MDItOC44MjMgOS4wODMtMS40NTcgNC4wNjQtMS4wODggOC41ODcuOTggMTIuMzM2IDEuODQ4IDMuOTQ3IDYuOTAxIDcuOTg1IDExLjk1NiA3Ljk4NSA1LjA3NS4wMTYgOS4zMDMtMi4zODQgMTIuMzMtNi4wODUgMy4wODctMy42OTQgNS4xNi04LjEwNiA3LjI5OC0xMi40MDl6TTE2Ny43NDQgMTY1LjczNWMtLjU5Ni45ODctMS4yMzQgMS45NDYtMS45MjkgMi44NjVhODEuODc2IDgxLjg3NiAwIDAxLTYuODQ2IDguODRjLS4zMjkuMzgtLjY2NS43NTMtMS4wMDYgMS4xMjNhMTQuMzM1IDE0LjMzNSAwIDAxLTEuNTgzIDEuNDY1Yy0uODMuNjczLTEuNzI2IDEuMjc1LTIuNzIzIDEuNjYtLjk5Ny4zODUtMi4wOS41NDQtMy4xNDUuNDE1YTYuNTY0IDYuNTY0IDAgMDEtMi44MDYtMS4wNzFjLS40MTktLjI2NC0uODEzLS41NjgtMS4xODQtLjkwNS0uMzctLjMzNi0uNzIzLS42OTgtMS4wNi0xLjA4Ny0uMzM3LS4zODktLjY0OS0uODAxLS45NS0xLjIzYTEwLjY5MiAxMC42OTIgMCAwMS0xLjI2My0yLjIzOWMtLjE2My0uMzktLjMxMi0uNzg4LS40MzgtMS4xOTUtLjEyNi0uNDA2LS4yMzMtLjgyLS4zMzEtMS4yNC0uMDk4LS40MTgtLjE4LS44NDItLjI1LTEuMjcxLS4wNjktLjQzLS4xMzMtLjg2MS0uMTk1LTEuMzA1YTE5OC45NCAxOTguOTQgMCAwMS0uNTk2LTQuOTggMjAzLjYzMiAyMDMuNjMyIDAgMDEtLjUzNC01LjU5NGMtLjE2LTEuOTY3LS4yOS0zLjk4MS0uMzI3LTYuMDE2LS4wMzctMi4wMzYuMDItNC4xMDEuMzMtNi4xMTMuMzEyLTIuMDEyLjkwMy0zLjk4IDEuOTUxLTUuNzE2YTEwLjI5IDEwLjI5IDAgMDEuODgzLTEuMjcxYy4zMi0uMzk4LjY2NS0uNzc2IDEuMDM4LTEuMTNhMTEuMTc4IDExLjE3OCAwIDAxMi41MzMtMS45NTNjLjQ4LS4yNzUuOTc5LS41MSAxLjQ5Mi0uNzI1cy0uMDczLjE2NC4xMzgtLjA0YzIuMjI2LS43NzUgNC42NzYtMS4wMzcgNy4wOTUtLjk3NGE0MC40MTIgNDAuNDEyIDAgMDE3LjUxLjgzYzIuNTEyLjUwNyA0Ljk5NSAxLjE3NSA3LjQ3MSAxLjg2NGExMDQuODI4IDEwNC44MjggMCAwMTcuMzU4IDIuMWMxLjUyNS40NyA0LjIyNyAxLjE4MyA1Ljc1OCAxLjcxLTkuMzEzIDYuMzc1LTE4LjYxNSAxMi43Ni0yOC41MSAxOC4xMTEiIGZpbGw9IiM5ODI5MjAiLz48cGF0aCBkPSJNMTMxLjAyMiAxMTJjLTUuMDMyIDUuMzMtNi42OTUgMTMuNDI0LTQuMDkgMjAuMzQzIDEuODc2IDQuOTczIDYuMDExIDkuNDQ1IDExLjM0IDExLjA5NyA3LjUwMiAyLjYwMiAxNS40MTktMS40NzQgMTguMDgtOC45OTUgMi41NTQtNi42OTMgMS43MzQtMTQuMDE3LTIuMTk0LTIwLjEyMSA2LjUzMy0zLjIzMiAxMy4wMTMtNi41OTUgMTkuNDgzLTkuOTY3IDMuMDg3LS45MTYgNi4xNzYtMS44MjkgOS4yNjYtMi43MzMgMS4wMy0uMzA1IDIuMDYxLS42MDMgMy4wOTMtLjg5OS4xNDMtLjI2NC4yODEtLjUzNi40MTQtLjgwOGwuMzgyLS43OTNjLjEyMy0uMjcuMjM4LS41NDMuMzQ4LS44MjEuMTA5LS4yNzkuMjEyLS41Ni4zMDgtLjg0Ni4wOTYtLjI4NS4xOC0uNTc0LjI2LS44NjUuMDc4LS4yOTEuMTQ4LS41ODQuMjEtLjg4LjA2MS0uMjk3LjExNi0uNTk0LjE2NC0uODkzLjA0OC0uMy4wOS0uNjAxLjEyNC0uOTAyYTI0Ljk0IDI0Ljk0IDAgMDAuMTI2LTEuODIxIDE4Ljc4NSAxOC43ODUgMCAwMC0uMDc3LTEuODRjLS4wMzMtLjMwNy0uMDc1LS42MTQtLjEyNi0uOTE5YTE3LjIgMTcuMiAwIDAwLS41MjgtMi42NjUgMTUuNjcgMTUuNjcgMCAwMC0uMzM5LS45ODYgMTYuMzIgMTYuMzIgMCAwMC0uNDA4LS45NTJjLS4xNS0uMzEzLS4zMS0uNjItLjQ4LS45MjEtLjE3MS0uMy0uMzU0LS41OTQtLjU0Ni0uODhhMTYuNTc4IDE2LjU3OCAwIDAwLTEuMzUtMS43ODcgMTguOTY0IDE4Ljk2NCAwIDAwLTEuNjMzLTEuNjk1Yy0xLjE5Mi0xLjA3NS0yLjUzLTEuOTgzLTMuOTc4LTIuNjY1LTEuNDQ5LS42ODMtMy4wMDgtMS4xNDQtNC41OTYtMS4zOTItLjc5My0uMTI0LTEuNTk0LS4xOTgtMi4zOTYtLjIzLS44MDItLjAzMi0xLjYwNi0uMDIzLTIuNDA3LjAzNC0xLjYwMi4xMTQtMy4xODYuNDQ3LTQuNzAyIDEtMS41MTcuNTUyLTIuOTY0IDEuMzI0LTQuMjkgMi4zMTJhMjAuNzkgMjAuNzkgMCAwMC0zLjY2NyAzLjU3IDE5LjQyMiAxOS40MjIgMCAwMC0xLjYxOSAyLjQ0NSAxOC4zODcgMTguMzg3IDAgMDAtMS4yMyAyLjY1NSAxNy45NyAxNy45NyAwIDAwLS43MjYgMi45NzJjLS4wOTEuNTEzLS4xNTcgMS4wMy0uMTk2IDEuNTUtLjA0LjUyLS4wNTQgMS4wNDMtLjA0MSAxLjU2Ny4wMTIuNTIzLjA1MSAxLjA0Ny4xMTQgMS41Ny4wNjQuNTIyLjE1IDEuMDQzLjI2MyAxLjU2LjExMS41MTguMjQ3IDEuMDMuNDA4IDEuNTM1LjE2Mi41MDUuMzQ3IDEuMDAzLjU1NyAxLjQ5LjIwOS40ODcuNDQyLjk2NS43MDMgMS40MjlsLjAwNC0uMDAxYy4yNi40NjIuNTQ4LjkxMi44NjMgMS4zNDcuMzE2LjQzNC42NTYuODUzIDEuMDIyIDEuMjU1LjM2NS40MDIuNzU4Ljc4OCAxLjE3NSAxLjE1Mi40MTguMzY1Ljg1OC43MDggMS4zMiAxLjAyOS0xLjc5Ljk1Ni0zLjY0MyAxLjc5MS01LjUyNyAyLjUzOGwtMTQuNzEzIDcuMTgxLTEwLjIwOC00Ljk3OWMtNS4xMDQtMi40OTQtMTAuMjEtNC45ODctMTUuMzEyLTcuNDgzLTIuNzk5LTEuMzY1LTUuNjM4LTIuNjkyLTguMjkyLTQuMzYtLjMxNC0uMTk4LS42MjUtLjQwMS0uOTI1LS42MThhOS45MTIgOS45MTIgMCAwMS0uODc4LS42ODQgOC4wNzYgOC4wNzYgMCAwMS0uODA3LS43NTUgOC4xOTcgOC4xOTcgMCAwMS0uNzEtLjgzMmMtLjIyMy0uMjk2LS40MjktLjYwNS0uNjE1LS45MjRhOS45OTcgOS45OTcgMCAwMS0uNTEtMS4wMjYgMTEuOTYzIDExLjk2MyAwIDAxLS42OC0yLjI0MmMtLjA4My0uMzkzLS4xNDctLjc5LS4xOS0xLjE5LS4wODYtLjgtLjA4LTEuNjEzLS4wMDEtMi40MjZhMTQuOTk2IDE0Ljk5NiAwIDAxLjM1Ni0yLjM3NGMuMTYzLS43ODEuMzg0LTEuNTU2LjY2MS0yLjMxNC4yNzctLjc1OC42MDctMS41Ljk4Ny0yLjIyNy4zODEtLjcyNS44MTMtMS40MzQgMS4yOTItMi4xMjJhMTguMzE2IDE4LjMxNiAwIDAxMS42MDktMS45MDIgMTguMzI1IDE4LjMyNSAwIDAxMS44OTgtMS42NTZjLjY2NS0uNTA3IDEuMzU2LS45NzkgMi4wNy0xLjQxYTIwLjQ3IDIwLjQ3IDAgMDEyLjIyNS0xLjE0NiAyMC41MTcgMjAuNTE3IDAgMDEyLjM2NS0uODdjLjQwNy0uMTI0LjgyLS4yMzYgMS4yMzQtLjMzN3MuMDk4LS4wNjYuNTE1LS4xMmE4LjE1OSA4LjE1OSAwIDAwLTMuMzU4IDEuNzk3bC4wMTEtLjAwN2E4LjE3IDguMTcgMCAwMC0xLjkwNiAyLjQ1NSA3Ljk0OSA3Ljk0OSAwIDAwLS44MjggMi45OGMtLjA1MS43NiAyLjczNCAxLjg5OC41ODUgMi41MjVhOC4xMDcgOC4xMDcgMCAwMDEuOTA3IDIuMjM5YzEuNTU5IDEuMzA0IDMuNjMgMS44OSA1LjcgMS41MzggMi4wNjktLjM1MiAzLjkxNC0xLjY4IDUuMTE1LTMuNDk5YTkuMDc5IDkuMDc5IDAgMDAuNTUtOS44NTljLTEuNDg0LTIuNzE5LTQuODgzLTQuOTktOC4wNzctNC4xNTVhOS4xOTEgOS4xOTEgMCAwMC00Ljc5IDIuOTc1IDguOTg3IDguOTg3IDAgMDAtMi40MTMgNS4xMmMtLjEyMiAxLjkyLjQyNyAzLjkwMyAxLjY2IDUuNDA0IiBmaWxsPSIjZmZmZmZhIi8+PC9zdmc+')`,
            width: "120px",
            minWidth: "120px"
          }} />
        </Link>
        
        <button 
          className="md:hidden text-[hsl(212,40%,18%)] focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        <div className={`nav-links w-full md:w-auto md:flex items-center ${isOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link 
                href="/" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
              >
                Home
                {location === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/about' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
              >
                About
                {location === '/about' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/menu' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
              >
                Menu
                {location === '/menu' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
              </Link>
            </li>

            <li>
              <Link 
                href="/contact" 
                className={`block py-2 px-1 relative transition-colors duration-200 ${location === '/contact' ? 'text-[hsl(145,63%,49%)] font-semibold' : 'hover:text-[hsl(145,63%,49%)]'}`}
              >
                Contact
                {location === '/contact' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(145,63%,49%)]"></span>}
              </Link>
            </li>
            <li className="md:ml-4">
              <Link 
                href="/contact" 
                className="mt-4 md:mt-0 block py-2 px-6 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
