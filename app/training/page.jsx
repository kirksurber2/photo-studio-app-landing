import TrainingSection from './components/TrainingSection'
import Link from 'next/link'
import './training.module.css'

export default function TrainingPage() {
  return (
    <>
      <section className="training-categories">
        <h2 className="section-title">Explore Training Categories</h2>
        <div className="card-grid">
          <Link href="/training/photography" className="training-card">
            <div className="card-image" style={{ backgroundImage: `url(/images/training-photography.jpg)` }} />
            <div className="card-title">Photography Training</div>
          </Link>

          <Link href="/training/photography-business" className="training-card">
            <div className="card-image" style={{ backgroundImage: `url(/images/training-business.jpg)` }} />
            <div className="card-title">Photography Business</div>
          </Link>

          <Link href="/training/photo-studio-app" className="training-card">
            <div className="card-image" style={{ backgroundImage: `url(/images/training-app.jpg)` }} />
            <div className="card-title">Photo Studio App Training</div>
          </Link>
        </div>
      </section>

      <TrainingSection
        videoSrc="/sample-video.mp4"
        title="Our Process"
        description="See how we work with clients from start to finish in this behind-the-scenes video."
      />

      <TrainingSection
        videoSrc="/testimonial.mp4"
        title="Client Stories"
        description="Watch how we helped real clients achieve their goals."
        reverse
      />

   
    </>
  )
}
