import Link from "next/link";
import LinkCard from "../components/LinkCard";

export default function StartPhotographyBusinessPage() {
  return (
    <main>
      <h1>How to Start a Photography Business</h1>
      <p>Starting a photography business takes more than just taking great photos. Here's how to get set up for success:</p>
      
      <div>
        <LinkCard 
          url="/training/photography-business/how-to-start-a-photography-business"
          imageUrl=""
          title="How to Start a Photography Business: Step by Step"
          description="Start your business simply and easily, without over complicating everything"
          mainPoints={["Pricing", "Build Your Portfolio", "Marketing", "Website",  ]}
        />
        <LinkCard 
          url=""
          imageUrl=""
          title=""
          description=""
          mainPoints={[]}
        />
        <LinkCard 
          url=""
          imageUrl=""
          title=""
          description=""
          mainPoints={[]}
        />
        <LinkCard 
          url=""
          imageUrl=""
          title=""
          description=""
          mainPoints={[]}
        />
        
      </div>
    </main>
  );
}
