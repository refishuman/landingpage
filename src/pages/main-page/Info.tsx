import { IconZoomQuestion, IconBook, IconBrandSpotify, IconBook2, IconBallFootball, IconBrain, IconBrandYoutube, IconPlayerPlay, IconMail, IconBrandInstagram, IconArrowRight } from '@tabler/icons-react';
import QuizImg from '../../assets/imgs/tension.png'
import AboutUsImg from '../../assets/imgs/about-us.png'
import RefCornerImg from '../../assets/imgs/ref-corner.png'

export default function Info() {
  const upperCard = "h-full border border-border rounded-lg p-4 pb-6"
  const lowerCard = "h-full border border-border rounded-lg p-4"
  const eduHubCard = "flex w-full items-center justify-center gap-4 rounded-lg border border-border p-3 text-center sm:gap-6 xl:w-[80%]"
  const refCornerCard = "flex justify-center gap-2 rounded-lg border border-primary p-2 text-center"
  const stayConnectedIcons = "size-10 text-text sm:size-12"

  return (
    <>
      <section className="grid w-full grid-cols-1 gap-4 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:px-8 xl:grid-cols-3">
        <div className={upperCard}>
          <div className='flex h-full flex-col'>
            <div className='flex gap-4 items-center pb-4' >
              <IconZoomQuestion stroke={1.5} className='size-10 text-primary' />
              <h1
              className='
              text-xl
              font-semibold
              text-text'
              >ABUSE QUIZ</h1>
            </div>
            <div className='flex flex-1 flex-col gap-4 sm:flex-row'>
              <img className="aspect-square w-full rounded-lg border border-border object-cover sm:w-42 lg:w-44 2xl:w-50" src={QuizImg} alt="" />
              <div className='flex flex-1 flex-col justify-between gap-4'>
                <div className='flex flex-col gap-2'>
                  <p>Do you know what counts as referee abuse?</p>
                  <p>Take the quiz and see where you stand.</p>
                </div>
                <a href="" className='flex gap-2 bg-primary text-white p-2 rounded-lg font-bold justify-between' style={{ fontWeight: 700 }}> TAKE QUIZ <IconArrowRight stroke={2} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={upperCard}>
          <div className='h-full'>
            <div className='flex gap-4 items-center pb-4' >
              <IconBook stroke={1.5} className='size-10 text-primary' />
              <h1
              className='
              text-xl
              font-semibold
              text-text'
              >EDUCATIONAL HUB</h1>
            </div>
            <div className='flex flex-col gap-4 items-center'>
              <a href="" className={eduHubCard}>
                <IconBook2 stroke={1.5} className='size-8 text-accent' />
                <h2>LEARN THE GAME</h2>
              </a>
              <a href="" className={eduHubCard}>
                <IconBrain stroke={1.5} className='size-8 text-danger' />
                <h2>MENTAL HEALTH</h2>
              </a>
              <a href="" className={eduHubCard}>
                <IconPlayerPlay stroke={1.5} className='size-8 text-info' />
                <h2>ABUSE VIDEOS</h2>
              </a>
            </div>
          </div>
        </div>
        <div className={upperCard}>
          <div>
            <div className='flex gap-4 items-center pb-4' >
              <IconBallFootball stroke={1.5} className='size-10 text-primary' />
              <h1
              className='
              text-xl
              font-semibold
              text-text'
              >REFEREE CORNER</h1>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <img className="aspect-square w-full rounded-lg border border-border object-cover sm:w-42 lg:w-44 2xl:w-50" src={RefCornerImg} alt="" />
              <div className='flex flex-1 flex-col justify-between gap-4'>
                <div className='flex flex-col gap-2'>
                  <p>Want to join?</p>
                </div>
              <div className='flex flex-col gap-4'>
              <a href="" className={refCornerCard}>
                <i></i>
                <h2>COMMUNITY</h2>
              </a>
              <a href="" className={refCornerCard}>
                <i></i>
                <h2>SALARY SURVEYS</h2>
              </a>
              <a href="" className={refCornerCard}>
                <i></i>
                <h2>ASSOCIATIONS</h2>
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>

        <div className={lowerCard}>
          <div className='flex gap-4 items-center pb-2' >
            <h1
            className='
            text-xl
            font-semibold
            text-text'
            >ABOUT US</h1>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <img className="aspect-[4/3] w-full rounded-lg border border-border object-cover sm:w-42 lg:w-44 2xl:w-50" src={AboutUsImg} alt="" />
            <div className='flex flex-1 flex-col justify-between gap-4'>
              <p>We're protecting referees through education and AI.</p>
              <a href="" className='flex gap-2 bg-primary text-white p-2 rounded-lg font-bold justify-between' style={{ fontWeight: 700 }}> MORE INFO <IconArrowRight stroke={2} /></a>
            </div>
          </div>
        </div>
        <div className={lowerCard}>
          <div className='flex gap-4 items-center pb-2' >
            <h1
            className='
            text-xl
            font-semibold
            text-text'
            >STAY CONNECTED</h1>
          </div>
          <p>Get in touch with us on social media!</p>
          <div className='grid grid-cols-4 gap-4 pt-8'>
            <a href="">
              <IconBrandInstagram stroke={1} className={stayConnectedIcons} />
            </a>
            <a href="">
              <IconMail stroke={1} className={stayConnectedIcons}  />
            </a>
            <a href="">
              <IconBrandYoutube stroke={1} className={stayConnectedIcons} />
            </a>
            <a href="">
              <IconBrandSpotify stroke={1} className={stayConnectedIcons} />
            </a>
          </div>
        </div>
        <div className={lowerCard}>
          <div className='flex gap-4 items-center pb-2' >
            <h1
            className='
            text-xl
            font-semibold
            text-text'
            >SEND US A MESSAGE</h1>
          </div>
          <div className='flex flex-col gap-4'>
            <p>Have a question or a story to share? <br /> We'd love to hear from you!</p>
            <a href="" className='flex border border-primary p-2 rounded-lg justify-between'>
              <p>SEND EMAIL</p>
              <IconArrowRight stroke={2} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
