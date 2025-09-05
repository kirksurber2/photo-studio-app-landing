import PricingPlansWithAddOns from '../components/PricingPlansWithAddons/PricingPlansWithAddons';

export default function PricingPage() {
  return (
    <main>
      <PricingPlansWithAddOns
        heading="Plans that grow with your studio"
        starter={{
          launchPrice: '$29',
          regularPrice: '$59',
          ctaHref: '/signup?plan=starter',
          usersNote: '1 user',
        }}
        pro={{
          price: '$99',
          ctaHref: '/signup?plan=pro',
        }}
        addOns={{
          show: true,
          businessLine: {
            priceText: '$9–$15/mo + usage',
            ctaHref: '/billing/addons?addon=business-line',
          },
          callTeamTool: {
            overageText: '$0.02/min overage',
            ctaHref: '/billing/addons?addon=call-team-tool',
            tiers: [
              { name: 'Starter', minutes: 2500, estCalls: 165, price: '$29/mo' },
              { name: 'Growth', minutes: 5000, estCalls: 330, price: '$49/mo' },
              { name: 'Pro', minutes: 10000, estCalls: 660, price: '$79/mo' },
              { name: 'Enterprise', minutes: 20000, estCalls: 1320, price: 'Custom' },
            ],
          },
        }}
      />
    </main>
  );
}