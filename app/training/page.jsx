import TrainingSection from './components/TrainingSection'
import Link from 'next/link'


export default function TrainingPage () {

    return(
        <>
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