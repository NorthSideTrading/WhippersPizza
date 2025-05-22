import { useEffect, useState } from 'react';
import { Link } from 'wouter';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1B2A41] text-white">
      {/* Map Section */}
      <div className="w-full h-[300px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.307218860361!2d-69.75731882381578!3d44.32205427111014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb203e465b9a03f%3A0xf5b6a1eb59df917a!2s97%20Bangor%20St%2C%20Augusta%2C%20ME%2004330!5e0!3m2!1sen!2sus!4v1684861798971!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Whippers Pizza Location"
          className="absolute top-0 left-0"
        ></iframe>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Contact Info */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="h-24 w-48 bg-contain bg-no-repeat bg-center mb-6" style={{ 
              backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZWxsaXBzZSBjeD0iMTIwIiBjeT0iMTIwIiByeD0iMTIwIiByeT0iMTIwIiBmaWxsPSIjOTgyOTIwIi8+PHBhdGggZD0iTTYyLjM5OSA5Ny42NDNjLTEuNDg0LTIuNzE4LTMuNTM1LTQuNDIyLTYuOTgzLTQuMzljLTEuODE2LjE2My0zLjQ0Ljk0OC00Ljg0OCAyLjEyNWE5LjU5OCA5LjU5OCAwIDAwLTIuODI2IDQuNDdjLTEuMDAzIDMuMzQzLS41NTYgNi41NiAxLjUyMyA5LjQzMyAxLjQzIDEuOTcgMy44MDYgMi44OTIgNi4zOTQgMi4zOTIgMi42NzQtLjU0OSA0LjczMy0yLjUzNiA1Ljg5LTUuMjMgMS4zOTMtMy40NTIgMS4zMzQtNi41MjMuODUtOC44ek0xODUuMjEzIDg1LjUzNmMtMS4yNTMtMy4yNjUtMy44Ni01LjM5LTYuOTM1LTUuOTI1LTMuODI2LS42NjYtNy43NzYgMS42MTEtOS41MDcgNS41LTEuODkgNC4yMzgtLjk3OCA5LjUgMi4yNzggMTIuODUgMi43MzMgMy40MTcgNi43NiA0LjczIDEwLjQxNiAzLjQzNiA0LjI0OS0xLjUgNi42NzUtNi40MTcgNS44OTYtMTEuOTQzYTEyLjM5NCAxMi4zOTQgMCAwMC0yLjE0OC0zLjkxOHpNMTI0Ljk0MSA3Ni45OTRjNC42NTMtLjQwNyA3LjE2LTUuMjgyIDYuMDUyLTkuNTk3LS45OTYtNC4zMi00LjM1Ni03LjQ1Ni04LjcwMi03LjQ1Ni00LjI5OCAwLTcuOTU0IDMuMTc5LTguNzg3IDcuNDc3LS45NzQgNC44NjMgMi44MTggOS44NjYgOC40NDcgOS44NjYuMzM3LS4wMDQuNjY0LS4wMjguOTktLjA3NnYtLjIxNHoiIGZpbGw9IiM5ODI5MjAiLz48cGF0aCBkPSJNNTQuNTcyIDEyNi45NTRDNTguODYgMTIxLjQzOCA2My40MTEgMTE2LjIzIDY4LjA0NiAxMTFjNC41MiA1LjE0MiA4Ljk4NCAxMC4zNDUgMTMuMzk3IDE1LjU5M2ExMDkuOTA2IDEwOS45MDYgMCAwMDIuMjE0IDIuNTk5Yy4xNjUuMTg0LjU0Ni4zNjQuNDYyLS4xMDgtLjE2LTEuNDgzLS4wNzUtMy0uMjM2LTQuNDkxLS4xNi0xLjQ5Mi0uMzUtMi45NzctLjU2Mi00LjQ1OS0uMjEzLTEuNDg2LS40NTgtMi45Ny0uNzE4LTQuNDQ2LS45NzgtNS4zOS0yLjE0LTEwLjc1Ny0zLjI3OC0xNi4xMzMgNC4xOS0uMjAzIDguMzgtLjM0IDEyLjU2My0uNDU1IDEuMzkyLS4wNjIgMi43ODMtLjA4MyA0LjE3NC0uMTA0IDMuMzA2LS4wNDIgNi42MTIuMDc2IDkuOTE3LjE2IDE0LjI1LjM4NSAyOC40NSAxLjk0NiA0Mi42MjMgMi45MiAxMC4wOTcuNzUzIDIwLjIyNS45NzUgMzAuMzQ2LjAyOSA1LjMxLS41ODcgMTAuNTYtMS41ODIgMTUuNzg1LTIuNjkzIDEuNDM3LS4wNzUgMi44NzQtLjE0NyA0LjMxMS0uMjE4LjI0OC0uMDEyLjQ5MyAyLjcxNy42NDkgNi4wOC4xMzggNC4xODMuMDQgOC4zNzQtLjMzMyAxMi41MzNhMjQuNTkxIDI0LjU5MSAwIDAxLS41OCAzLjM5NGMtLjE2Ni41NzYtLjM2IDEuMTQ1LS41OTcgMS42OThhMjQuNzY2IDI0Ljc2NiAwIDAxLTEuMTExIDIuMzRjLTEuNTI1IDIuODMyLTMuNTYgNS4zNjYtNi4wODUgNy4zNDJhMjMuODY3IDIzLjg2NyAwIDAxLTIuMDAxIDEuNDQgMjQuOTIgMjQuOTIgMCAwMS0yLjM1IDEuMzNjLTEuOTU3LjkzMy00LjA4MiAxLjctNi4yODYgMi4wNzYtMi45NjguNDg2LTYuMDI2LjM0Mi04Ljk2Ni0uMzQtOS4yNDEtMi44OTMtMTEuODI4LTEyLjgxOC0xNS42ODctMjAuNTI0LTIuOTI0LTYuMDI2LTcuNDcyLTExLjI2Mi0xMy41NDMtMTQuNDg0LTYuMDkzLTMuMjA1LTEzLjI1My0zLjgyNy0xOS45NTgtMi4wNzYtMTMuMTc3IDQuMjI0LTE5Ljk0IDE2LjE2Ni0yNC45MTMgMjguNDIzLTEuNDggMy41NTgtMi44NiA3LjIxOC01LjA0IDEwLjQwNC0yLjEyMyAzLjA4OS02LjA1MyA0LjYxNi05LjQ4OSAzLjMxNi0zLjI1NC0xLjE2NC01LjQ4OC00LjUtNS4wOTQtOC4wMDcuMTU0LTIuMTg3IDEuMjU5LTQuMjIxIDIuODc3LTUuNzM0IDEuNTA4LTEuNDY1IDIuOTE4LTIuNjg4IDUuMTAyLTIuNjgxIDEuNTEzLjA3NyAyLjkwNi42ODUgMy45ODYgMS43MjguMDk0LjEuMTk3LjE5LjMwOS4yNy4zMTcuMjI4LjY4NS4zNzUgMS4wNi40MDEuMzczLjAyNy43NS0uMDQ5IDEuMDgtLjIzNGwtLjAwMi0uMDAyYy4zMjctLjIxLjU5NC0uNTIuNzYtLjg4NC4xNjgtLjM2NC4yMy0uNzcuMTgtMS4xNzItLjA1LS40MDItLjIwMy0uNzg2LS40My0xLjExLS43MzYtMS4wNDQtMS42NDItMS45OTgtMi42NzYtMi43NjJhMTMuMjc5IDEzLjI3OSAwIDAwLTYuMTcxLTIuNTU1Yy0xLjExNi0uMTc0LTIuMjUzLS4yMTYtMy4zOC0uMTIzYTEzLjYxNSAxMy42MTUgMCAwMC0zLjMyNC42OTRjLTQuMTY4IDEuNDc1LTcuMzcgNC45MDItOC44MjMgOS4wODMtMS40NTcgNC4wNjQtMS4wODggOC41ODcuOTggMTIuMzM2IDEuODQ4IDMuOTQ3IDYuOTAxIDcuOTg1IDExLjk1NiA3Ljk4NSA1LjA3NS4wMTYgOS4zMDMtMi4zODQgMTIuMzMtNi4wODUgMy4wODctMy42OTQgNS4xNi04LjEwNiA3LjI5OC0xMi40MDl6TTE2Ny43NDQgMTY1LjczNWMtLjU5Ni45ODctMS4yMzQgMS45NDYtMS45MjkgMi44NjVhODEuODc2IDgxLjg3NiAwIDAxLTYuODQ2IDguODRjLS4zMjkuMzgtLjY2NS43NTMtMS4wMDYgMS4xMjNhMTQuMzM1IDE0LjMzNSAwIDAxLTEuNTgzIDEuNDY1Yy0uODMuNjczLTEuNzI2IDEuMjc1LTIuNzIzIDEuNjYtLjk5Ny4zODUtMi4wOS41NDQtMy4xNDUuNDE1YTYuNTY0IDYuNTY0IDAgMDEtMi44MDYtMS4wNzFjLS40MTktLjI2NC0uODEzLS41NjgtMS4xODQtLjkwNS0uMzctLjMzNi0uNzIzLS42OTgtMS4wNi0xLjA4Ny0uMzM3LS4zODktLjY0OS0uODAxLS45NS0xLjIzYTEwLjY5MiAxMC42OTIgMCAwMS0xLjI2My0yLjIzOWMtLjE2My0uMzktLjMxMi0uNzg4LS40MzgtMS4xOTUtLjEyNi0uNDA2LS4yMzMtLjgyLS4zMzEtMS4yNC0uMDk4LS40MTgtLjE4LS44NDItLjI1LTEuMjcxLS4wNjktLjQzLS4xMzMtLjg2MS0uMTk1LTEuMzA1YTE5OC45NCAxOTguOTQgMCAwMS0uNTk2LTQuOTggMjAzLjYzMiAyMDMuNjMyIDAgMDEtLjUzNC01LjU5NGMtLjE2LTEuOTY3LS4yOS0zLjk4MS0uMzI3LTYuMDE2LS4wMzctMi4wMzYuMDItNC4xMDEuMzMtNi4xMTMuMzEyLTIuMDEyLjkwMy0zLjk4IDEuOTUxLTUuNzE2YTEwLjI5IDEwLjI5IDAgMDEuODgzLTEuMjcxYy4zMi0uMzk4LjY2NS0uNzc2IDEuMDM4LTEuMTNhMTEuMTc4IDExLjE3OCAwIDAxMi41MzMtMS45NTNjLjQ4LS4yNzUuOTc5LS41MSAxLjQ5Mi0uNzI1cy0uMDczLjE2NC4xMzgtLjA0YzIuMjI2LS43NzUgNC42NzYtMS4wMzcgNy4wOTUtLjk3NGE0MC40MTIgNDAuNDEyIDAgMDE3LjUxLjgzYzIuNTEyLjUwNyA0Ljk5NSAxLjE3NSA3LjQ3MSAxLjg2NGExMDQuODI4IDEwNC44MjggMCAwMTcuMzU4IDIuMWMxLjUyNS40NyA0LjIyNyAxLjE4MyA1Ljc1OCAxLjcxLTkuMzEzIDYuMzc1LTE4LjYxNSAxMi43Ni0yOC41MSAxOC4xMTEiIGZpbGw9IiM5ODI5MjAiLz48cGF0aCBkPSJNMTMxLjAyMiAxMTJjLTUuMDMyIDUuMzMtNi42OTUgMTMuNDI0LTQuMDkgMjAuMzQzIDEuODc2IDQuOTczIDYuMDExIDkuNDQ1IDExLjM0IDExLjA5NyA3LjUwMiAyLjYwMiAxNS40MTktMS40NzQgMTguMDgtOC45OTUgMi41NTQtNi42OTMgMS43MzQtMTQuMDE3LTIuMTk0LTIwLjEyMSA2LjUzMy0zLjIzMiAxMy4wMTMtNi41OTUgMTkuNDgzLTkuOTY3IDMuMDg3LS45MTYgNi4xNzYtMS44MjkgOS4yNjYtMi43MzMgMS4wMy0uMzA1IDIuMDYxLS42MDMgMy4wOTMtLjg5OS4xNDMtLjI2NC4yODEtLjUzNi40MTQtLjgwOGwuMzgyLS43OTNjLjEyMy0uMjcuMjM4LS41NDMuMzQ4LS44MjEuMTA5LS4yNzkuMjEyLS41Ni4zMDgtLjg0Ni4wOTYtLjI4NS4xOC0uNTc0LjI2LS44NjUuMDc4LS4yOTEuMTQ4LS41ODQuMjEtLjg4LjA2MS0uMjk3LjExNi0uNTk0LjE2NC0uODkzLjA0OC0uMy4wOS0uNjAxLjEyNC0uOTAyYTI0Ljk0IDI0Ljk0IDAgMDAuMTI2LTEuODIxIDE4Ljc4NSAxOC43ODUgMCAwMC0uMDc3LTEuODRjLS4wMzMtLjMwNy0uMDc1LS42MTQtLjEyNi0uOTE5YTE3LjIgMTcuMiAwIDAwLS41MjgtMi42NjUgMTUuNjcgMTUuNjcgMCAwMC0uMzM5LS45ODYgMTYuMzIgMTYuMzIgMCAwMC0uNDA4LS45NTJjLS4xNS0uMzEzLS4zMS0uNjItLjQ4LS45MjEtLjE3MS0uMy0uMzU0LS41OTQtLjU0Ni0uODhhMTYuNTc4IDE2LjU3OCAwIDAwLTEuMzUtMS43ODcgMTguOTY0IDE4Ljk2NCAwIDAwLTEuNjMzLTEuNjk1Yy0xLjE5Mi0xLjA3NS0yLjUzLTEuOTgzLTMuOTc4LTIuNjY1LTEuNDQ5LS42ODMtMy4wMDgtMS4xNDQtNC41OTYtMS4zOTItLjc5My0uMTI0LTEuNTk0LS4xOTgtMi4zOTYtLjIzLS44MDItLjAzMi0xLjYwNi0uMDIzLTIuNDA3LjAzNC0xLjYwMi4xMTQtMy4xODYuNDQ3LTQuNzAyIDEtMS41MTcuNTUyLTIuOTY0IDEuMzI0LTQuMjkgMi4zMTJhMjAuNzkgMjAuNzkgMCAwMC0zLjY2NyAzLjU3IDE5LjQyMiAxOS40MjIgMCAwMC0xLjYxOSAyLjQ0NSAxOC4zODcgMTguMzg3IDAgMDAtMS4yMyAyLjY1NSAxNy45NyAxNy45NyAwIDAwLS43MjYgMi45NzJjLS4wOTEuNTEzLS4xNTcgMS4wMy0uMTk2IDEuNTUtLjA0LjUyLS4wNTQgMS4wNDMtLjA0MSAxLjU2Ny4wMTIuNTIzLjA1MSAxLjA0Ny4xMTQgMS41Ny4wNjQuNTIyLjE1IDEuMDQzLjI2MyAxLjU2LjExMS41MTguMjQ3IDEuMDMuNDA4IDEuNTM1LjE2Mi41MDUuMzQ3IDEuMDAzLjU1NyAxLjQ5LjIwOS40ODcuNDQyLjk2NS43MDMgMS40MjlsLjAwNC0uMDAxYy4yNi40NjIuNTQ4LjkxMi44NjMgMS4zNDcuMzE2LjQzNC42NTYuODUzIDEuMDIyIDEuMjU1LjM2NS40MDIuNzU4Ljc4OCAxLjE3NSAxLjE1Mi40MTguMzY1Ljg1OC43MDggMS4zMiAxLjAyOS0xLjc5Ljk1Ni0zLjY0MyAxLjc5MS01LjUyNyAyLjUzOGwtMTQuNzEzIDcuMTgxLTEwLjIwOC00Ljk3OWMtNS4xMDQtMi40OTQtMTAuMjEtNC45ODctMTUuMzEyLTcuNDgzLTIuNzk5LTEuMzY1LTUuNjM4LTIuNjkyLTguMjkyLTQuMzYtLjMxNC0uMTk4LS42MjUtLjQwMS0uOTI1LS42MThhOS45MTIgOS45MTIgMCAwMS0uODc4LS42ODQgOC4wNzYgOC4wNzYgMCAwMS0uODA3LS43NTUgOC4xOTcgOC4xOTcgMCAwMS0uNzEtLjgzMmMtLjIyMy0uMjk2LS40MjktLjYwNS0uNjE1LS45MjRhOS45OTcgOS45OTcgMCAwMS0uNTEtMS4wMjYgMTEuOTYzIDExLjk2MyAwIDAxLS42OC0yLjI0MmMtLjA4My0uMzkzLS4xNDctLjc5LS4xOS0xLjE5LS4wODYtLjgtLjA4LTEuNjEzLS4wMDEtMi40MjZhMTQuOTk2IDE0Ljk5NiAwIDAxLjM1Ni0yLjM3NGMuMTYzLS43ODEuMzg0LTEuNTU2LjY2MS0yLjMxNC4yNzctLjc1OC42MDctMS41Ljk4Ny0yLjIyNy4zODEtLjcyNS44MTMtMS40MzQgMS4yOTItMi4xMjJhMTguMzE2IDE4LjMxNiAwIDAxMS42MDktMS45MDIgMTguMzI1IDE4LjMyNSAwIDAxMS44OTgtMS42NTZjLjY2NS0uNTA3IDEuMzU2LS45NzkgMi4wNy0xLjQxYTIwLjQ3IDIwLjQ3IDAgMDEyLjIyNS0xLjE0NiAyMC41MTcgMjAuNTE3IDAgMDEyLjM2NS0uODdjLjQwNy0uMTI0LjgyLS4yMzYgMS4yMzQtLjMzN3MuMDk4LS4wNjYuNTE1LS4xMmE4LjE1OSA4LjE1OSAwIDAwLTMuMzU4IDEuNzk3bC4wMTEtLjAwN2E4LjE3IDguMTcgMCAwMC0xLjkwNiAyLjQ1NSA3Ljk0OSA3Ljk0OSAwIDAwLS44MjggMi45OGMtLjA1MS43NiAyLjczNCAxLjg5OC41ODUgMi41MjVhOC4xMDcgOC4xMDcgMCAwMDEuOTA3IDIuMjM5YzEuNTU5IDEuMzA0IDMuNjMgMS44OSA1LjcgMS41MzggMi4wNjktLjM1MiAzLjkxNC0xLjY4IDUuMTE1LTMuNDk5YTkuMDc5IDkuMDc5IDAgMDAuNTUtOS44NTljLTEuNDg0LTIuNzE5LTQuODgzLTQuOTktOC4wNzctNC4xNTVhOS4xOTEgOS4xOTEgMCAwMC00Ljc5IDIuOTc1IDguOTg3IDguOTg3IDAgMDAtMi40MTMgNS4xMmMtLjEyMiAxLjkyLjQyNyAzLjkwMyAxLjY2IDUuNDA0IiBmaWxsPSIjZmZmZmZhIi8+PC9zdmc+')`,
              marginLeft: 0,
            }} />
            <address className="not-italic mb-4 text-white">
              97 Bangor St<br />
              Augusta, ME 04330
            </address>
            <p className="mb-2">
              <a 
                href="tel:+12076233500" 
                className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (207) 623-3500
              </a>
            </p>
            <p>
              <a 
                href="mailto:whipperspizza@gmail.com" 
                className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                whipperspizza@gmail.com
              </a>
            </p>
          </div>
          
          {/* Hours */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-[hsl(145,63%,49%)]">Hours</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="font-semibold">Monday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Tuesday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Wednesday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Thursday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Friday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Saturday:</div>
              <div>11:00 AM - 9:00 PM</div>
              <div className="font-semibold">Sunday:</div>
              <div>11:00 AM - 9:00 PM</div>
            </div>
          </div>
          
          {/* Navigation and Social Links */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-[hsl(145,63%,49%)]">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/menu" 
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-white hover:text-[hsl(145,63%,49%)] transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </Link>
                </li>
                <li className="col-span-2 mt-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-5 py-2 bg-[hsl(145,63%,49%)] hover:bg-[hsl(145,63%,45%)] text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Order Now
                  </Link>
                </li>
              </ul>
            </nav>
            
            <h3 className="text-xl font-bold my-4 text-[hsl(145,63%,49%)]">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100057050006369" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="bg-white/10 hover:bg-[hsl(145,63%,49%)] text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {currentYear} Whippers Pizza. All rights reserved.</p>
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Whippers Pizza",
          "image": ["images/placeholder-hero-pizza.jpg"],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "97 Bangor St",
            "addressLocality": "Augusta",
            "addressRegion": "ME",
            "postalCode": "04330"
          },
          "telephone": "+1-207-623-3500",
          "email": "whipperspizza@gmail.com",
          "servesCuisine": "Pizza, Sandwiches",
          "priceRange": "$",
          "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:00", "closes": "21:00"}
          ],
          "url": "https://www.facebook.com/profile.php?id=100057050006369",
          "menu": `${window.location.origin}/menu`
        })}
      </script>
    </footer>
  );
};

export default Footer;
