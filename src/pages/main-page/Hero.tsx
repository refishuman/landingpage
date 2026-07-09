import refImg from '../../assets/imgs/logo-transparent.png'
// import { IconArrowRight } from '@tabler/icons-react';

export default function Hero() {
  return (
    <>
      <section className="flex w-full flex-col bg-bg lg:min-h-[420px] lg:flex-row">
        <div className='flex flex-col justify-between gap-4 px-4 py-8 sm:px-6 sm:py-10 lg:w-[48%] lg:px-8 xl:w-[43%]'>
          <h1 className='font-(family-name:--font-heading) text-[2.8rem] font-bold leading-[0.95] sm:text-[3.5rem] lg:text-[4rem]'
          >
            RESPECT REFEREES <br />
            <span className='text-primary'>RESPECT FOOTBALL</span>
          </h1>
          <p className='max-w-xl text-base sm:text-[1.2rem]'
          >
            We support referees. <br /> We fight abuse. <br /> We protect the game.
          </p>
          <div className='flex flex-col gap-2 font-medium text-[1.2rem] sm:flex-row sm:text-[1.35rem] lg:text-[1.5rem]'>
            <button className='flex w-full items-center justify-center rounded-lg border border-primary bg-primary px-6 py-4 text-surface sm:w-52 lg:w-56'>TAKE QUIZ</button>
            <button className='flex w-full items-center justify-center rounded-lg border border-text px-6 py-4 sm:w-52 lg:w-56'>ABOUT US</button>
          </div>
        </div>
        <div className="relative min-h-[320px] flex-1 overflow-hidden bg-(image:--bg-img) bg-cover bg-center bg-no-repeat sm:min-h-[420px] lg:min-h-0 lg:bg-right lg:[--fade-amount:40%] lg:mask-[linear-gradient(to_right,transparent,black_var(--fade-amount),black_100%)]">
          <img src={refImg} alt="Referee on a football stadium" className="absolute bottom-0 left-1/2 size-72 -translate-x-1/2 sm:size-90 lg:left-auto lg:right-[8%] lg:size-95 lg:translate-x-0" />
        </div>
      </section>
    </>
  )
}
