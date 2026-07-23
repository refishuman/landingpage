import Hero from "./main-page/Hero"
import Info from "./main-page/Info"

export default function MainPage() {
  return (
    <>
    <div className="flex w-full flex-col">
      <Hero />
      <Info />
    </div>
    </>
  )
}
