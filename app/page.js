'use client';
import Head from 'next/head';
import Image from "next/image";

import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

import { useState } from 'react';

import waveKg from '../public/kg-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/placeholder.png';
import beTheHero from '../public/beTheHero.png';
import joystickShow from '../public/joystickShow.png';
import nlwESport from '../public/NLW-ESport.png';



export default function Home() {
  const[darkMode,setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Kleydson Guilherme Portifolio</title>
        <meta name='description' content='gene'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>

      <main className='bg-bgLightmode dark:bg-gradient-to-b dark:from-bgDefault dark:to-bgDefault2 px-10 md:px-20 xl:px-40 '>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons text-black dark:text-white'>KleydsonG</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill 
                  className='cursor-pointer text-xl block dark:hidden'     
                  onClick={() => setDarkMode(prev => !prev)}
                />
                <BsFillSunFill 
                  className='cursor-pointer text-white text-xl hidden dark:block'     
                  onClick={() => setDarkMode(prev => !prev)}
                />
              </li>
              <li>
                <a 
                  className='bg-gradient-to-r select-none from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href='#' 
                >
                  Resume
                </a>
                </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-primaryLightmode dark:text-primary font-medium'>Kleydson Guilherme</h2>
            <h3 className='text-2xl py-2 text-textLightmode dark:text-textDefault'>Estudante de Análise e Desenvolvimento de Sistemas</h3>
            <p className='text-md py-5 leading-8 text-textLightmode dark:text-textDefault'>Estudante buscando ingressar na área de tecnologia</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3  text-textLightmode dark:text-textDefault'>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          
          <div className='relative mx-auto bg-gradient-to-b from-green-400 to-teal-300 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
            <Image src={waveKg} layout='fill' objectFit='cover'></Image>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 text-textLightmode dark:text-textDefault'>serviços aí</h3>
            <p className='text-md py-2 leading-8 text-textLightmode dark:text-textDefault'
            >blabla bla <span className='text-teal-500'>blablabla </span>blacblabla bla blabla  <span className='text-teal-500'>bla</span> blabla</p>
          </div>
          <div className='xl:flex gap-10'>
            <div className='text-center shadow-lg p-10 m-10 rounded-xl dark:shadow-indigo-950'>
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100}/>
              </div>
              <h3 className='text-lg font-medium text-primary dark:text-primaryLightmode pt-8 pb-2'>Beatu Dsegin</h3>
              <p className='py-2 text-textLightmode dark:text-textDefault'>Design toperson que fiz quando tava brincando Design toperson que fiz quando tava brincando Design toperson que fiz quando tava brincando</p>
              <h4 className='py-4 text-primary'>Ferramentas usadas</h4>
              <p className='text-textLightmode dark:text-textDefault py-1'>JavaScript</p>
              <p className='text-textLightmode dark:text-textDefault py-1'>NextJS</p>
              <p className='text-textLightmode dark:text-textDefault py-1'>TailWind</p>
            </div>

            <div className='text-center shadow-lg p-10 m-10 rounded-xl'>
              <div className='flex justify-center'>
                <Image src={code} width={100} height={100}/>
              </div>              
              <h3 className='text-lg font-medium text-primary pt-8 pb-2'>Beatu Dsegin</h3>
              <p className='py-2 text-textLightmode dark:text-textDefault'>Design toperson que fiz quando tava brincando Design toperson que fiz quando tava brincando Design toperson que fiz quando tava brincando</p>
              <h4 className='py-4 text-primary'>Ferramentas usadas</h4>
              <p className='text-textLightmode dark:text-textDefault py-1'>JavaScript</p>
              <p className='text-textLightmode dark:text-textDefault py-1'>NextJS</p>
              <p className='text-textLightmode dark:text-textDefault py-1'>TailWind</p>
            </div>

            <div className='text-center shadow-lg p-10 m-10 rounded-xl'>
              <div className='flex justify-center'>
                <Image src={consulting} width={100} height={100}/>
              </div>
              <h3 className='text-lg font-medium text-primary pt-8 pb-2'>Beatu Dsegin</h3>
              <p className='py-2 text-textLightmode dark:text-textDefault'>Design toperson que fiz quando tava brincando Design toperson que fiz quando tava brincando Design toperson que fiz quando tava brincando</p>
              <h4 className='py-4 text-primary'>Ferramentas usadas</h4>
              <p className='text-textLightmode dark:text-textDefault py-1'>JavaScript</p>
              <p className='text-textLightmode dark:text-textDefault py-1'>NextJS</p>
              <p className='text-textLightmode dark:text-textDefault py-1'>TailWind</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-primary dark:text-primaryLightmode text-3xl py-1'>Portifolio</h3>
            <p className='text-md py-2 leading-8 text-textLightmode dark:text-textDefault'
            >blabla bla <span className='text-teal-500'>blablabla </span>blacblabla bla blabla  <span className='text-teal-500'>bla</span> blabla</p>
          </div>
          <div className='flex flex-col gap-10 py-10 xl:flex-row xl:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web1} 
                className='rounded-lg object-cover' 
                width={'100%'}
                height={'100%'} 
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={beTheHero} 
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={joystickShow} 
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={nlwESport} 
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
