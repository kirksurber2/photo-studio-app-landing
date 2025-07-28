import Link from 'next/link';
import '../../training.module.css'; // Adjust if using CSS Modules

export const metadata = {
  title: 'Facebook Ads Training for Photographers | Photo Studio App',
  description:
    'Step-by-step Facebook Ads training tailored for photographers. Learn campaign setup, targeting, budgeting, ad creation, retargeting, and more.',
  keywords:
    'facebook ads for photographers, photography marketing, facebook ad training, retargeting photography clients, photography ad campaigns'
};

const adSections = [
  { title: "Facebook Ads: Overview", link: "/training/facebook-ads/overview" },
  { title: "Why Start with Facebook Ads", link: "/training/facebook-ads/why-start-with-facebook-ads" },
  { title: "Business Manager Setup", link: "/training/facebook-ads/business-manager-setup" },
  { title: "Create Your First Campaign", link: "/training/facebook-ads/create-your-first-campaign" },
  { title: "Budgeting & Spend Strategy", link: "/training/facebook-ads/budgeting" },
  { title: "Target Audience", link: "/training/facebook-ads/target-audience" },
  { title: "Testing Your Ads", link: "/training/facebook-ads/testing" },
  { title: "Reviewing & Optimizing Results", link: "/training/facebook-ads/reviewing-and-optimizing-results" },
  { title: "Retargeting", link: "/training/facebook-ads/retargeting" },
  { title: "Photoshop Artboards for Ads", link: "/training/facebook-ads/photoshop-artboards" },
  { title: "Mistakes to Avoid", link: "/training/facebook-ads/mistakes-to-avoid" }
];

export default function FacebookAdsTrainingPage() {
  return (
    <main className="training-container">
      <section className="trainingCategories">
        <h2 className="sectionTitle">Facebook Ads Training</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: '#555' }}>
          Learn how to create high-converting Facebook Ads tailored for photography businesses. Click any section below to dive in and grow your studio.
        </p>

        <div className="cardGrid">
          {adSections.map((section, idx) => (
            <Link href={section.link} key={idx} className="trainingCard">
              <div
                className="cardImage"
                style={{
                  backgroundImage: `url(/images/training-facebook-ads.jpg)`
                }}
              />
              <div className="cardTitle">{section.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
