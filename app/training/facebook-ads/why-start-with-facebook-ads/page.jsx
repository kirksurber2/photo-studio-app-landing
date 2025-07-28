import Breadcrumb from "@/components/Breadcrumb"; // We'll create this
import "../../facebookAds.css"; // Optional: dedicated or shared styles

export const metadata = {
  title: "Why Start with Facebook Ads | Photo Studio App Training",
  description: "Learn why Facebook Ads are the smartest way for photographers to start advertising. Lowest cost, high targeting precision, and rapid reach.",
  keywords: "facebook ads for photographers, low cost marketing, facebook targeting, photography business marketing, advertising photography"
};

export default function WhyStartWithFacebookAds() {
  return (
    <main className="training-section">
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Training", href: "/training" },
          { name: "Facebook Ads", href: "/training/facebook-ads" },
          { name: "Why Start with Facebook Ads" }
        ]}
      />

      <h1>Why Start with Facebook Ads</h1>

      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Why Start with Facebook Ads"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="text-block">
        <p>Facebook Ads are one of the lowest-cost marketing tools available today.</p>
        <p>Unlike traditional advertising, you can start with just a few dollars a day and still see measurable results.</p>

        <br />

        <p>The real power of Facebook Ads is targeting.</p>
        <p>You can show your ad to newly engaged couples, families with kids, or people in your zip code — all based on real user data.</p>

        <br />

        <p>As a photographer, you don’t have to guess. Facebook lets you reach exactly the kind of client you want, and it tells you how your ad is performing in real-time.</p>
      </div>

      <section className="downloads-section">
        <h2>Available Downloads</h2>
        <ul>
          <li><a href="/downloads/facebook-intro-guide.pdf" target="_blank">Facebook Ads Intro Guide (PDF)</a></li>
          {/* Add more downloads as needed */}
        </ul>
      </section>
    </main>
  );
}
