import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './page.module.css'
import ReactLogo from '../../image/react-logo.png'
import TypescriptLogo from '../../image/typescript-logo.png';
import HtmlLogo from '../../image/html-logo.png';
import CssLogo from '../../image/css-logo.png';
import NodeLogo from '../../image/node-logo.png';
import MongoDbLogo from '../../image/mongodb-logo.png';
import BootstrapLogo from '../../image/Bootstrap-logo.png';
import nextjsLogo from '../../image/next-logo.png';
import sassLogo from '../../image/sass-logo.png';
import graphqlLogo from '../../image/graphql-logo.png';
import portfolio1 from '../../image/portfolio-1.png';
import portfolio2 from '../../image/portfolio-2.png';

import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Script src="https://kit.fontawesome.com/1824339521.js" crossOrigin="anonymous"></Script>
      <header>
        <div className='container text-center'>
          <div className='profile-pic'>
          </div>
          <h2>Hi, My name is Abdulbasit</h2>
          <h5>Full-stack Web Developer</h5>
          <a target="_blank" href='https://www.linkedin.com/in/abdulhussain084/'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" className='facebook' href='https://www.facebook.com/profile.php?id=100089362263671'>
            <i class="fa-brands fa-square-facebook facebook"></i>
          </a>
          <a className='github' target="_blank" href='https://github.com/abdulbasit0-UI'>
            <i class="fa-brands fa-github github"></i>
          </a>
          <a className='instagram' target="_blank" href='https://www.instagram.com/abdulbasithussain9/'>
            <i class="fa-brands  fa-square-instagram"></i>
          </a>
          <div className='mt-4'>
            <h4 className='heading'>About Me</h4>
            <p>
              I am a fullstack web developer with four years of experience in the industry. With a strong background in HTML, CSS, JavaScript, Next JS, TypeScript, and Node, I am able to create complex and dynamic web applications that meet the needs of clients and end-users alike. As a fullstack developer, skilled in both front-end and back-end development, and have a keen eye for detail and a talent for problem-solving. I have a proven track record of success in developing and deploying high-quality web applications, and is committed to staying up-to-date with the latest trends and technologies in the field. With me on the team, clients can rest assured that their web development needs will be met with expertise, professionalism, and dedication.
            </p>
          </div>
        </div>
      </header>

      <section className='skills text-center container'>
        <h4 className='heading'>
          Skills
        </h4>
        <div className='row'>
          <div className='col-md-6'>
            <h4 className='heading'>Frontend</h4>
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-2 col-6'>
                <Image src={ReactLogo} />
                <h5 className='mt-2'>React</h5>
              </div>

              <div className='col-md-2 col-6'>
                <Image src={HtmlLogo} />
                <h5 className='mt-2'>Html</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={CssLogo} />
                <h5 className='mt-2'>Css</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={nextjsLogo} />
                <h5 className='mt-2'>Next Js</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={sassLogo} />
                <h5 className='mt-2'>Sass</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={BootstrapLogo} />
                <h5 className='mt-2'>Bootstrap</h5>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <h4 className='heading'>Backend</h4>
            <div className='row justify-content-center'>
              <div className='col-md-2 col-6'>
                <Image src={NodeLogo} />
                <h5 className='mt-2'>Node Js</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={MongoDbLogo} />
                <h5 className='mt-2'>Mongodb</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={TypescriptLogo} />
                <h5 className='mt-2'>Typescript</h5>
              </div>
              <div className='col-md-2 col-6'>
                <Image src={graphqlLogo} />
                <h5 className='mt-2'>Graphql</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container projects'>
        <h4 className='heading text-center'>Projects / Portfolio</h4>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <Image src={portfolio1} className="card-img-top" />
              <div className='card-body'>
                <h4 className='card-title'>Carque - Next js Web Application</h4>
                <a href='https://carque.co.za' target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>  https://carque.co.za</a>

              </div>
              <div className='card-footer'>
                <span class="badge text-bg-success">Full-stack Development</span>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <Image src={portfolio2} className="card-img-top" />
              <div className='card-body'>
                <h4 className='card-title'>Weather Web app - React</h4>
                <a href='https://abd-weather.vercel.app/' target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>  https://abd-weather.vercel.app/</a>
              </div>
              <div className='card-footer'>
                <span class="badge text-bg-success">SPA Web App</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className=' py-3 mt-5'>
        <div className='container'>
          <p className='m-0'>2023 Copyright &copy; Built By Abdulbasit Hussain with Next Js and bootstrap</p>
        </div>
      </footer>
    </main>
  )
}
