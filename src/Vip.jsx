import React from 'react'
import { useState } from 'react'
import CardPrice from './CardPrice'
import Bank from './Bank';

export default function Vip() {
    const [bank , setBank] = useState(false);
    console.log("bank state:", bank);
  return ( <>
  {bank && <Bank setBank={setBank}/>}
    <div className='h-dvh w-dvw flex justify-center items-center gap-7 bg-black '>



<CardPrice setBank={setBank}  title="Free plan" description="Perfect for beginners and individuals who want to explore the platform without any commitment. The Free plan gives you access to essential features so you can get started quickly and understand how everything works. It’s ideal for small personal projects, testing ideas, or learning the basics before upgrading. While it includes limited storage and basic support, it still provides a smooth and reliable experience to help you grow at your own pace." features={[
  "Basic Chat Access",
  "Limited Daily Messages",
  "Community Support",
  "Standard Response Time"
]}buttonText="Upgrade Now" />
<CardPrice setBank={setBank} title="Advanced Plan" description="Designed for professionals and growing teams who need more power and flexibility. The Advanced plan unlocks premium tools, increased storage, and priority support to help you work faster and more efficiently. It’s perfect for freelancers, startups, and small businesses that require better performance and additional customization options. With enhanced security and collaboration features, this plan helps you scale your projects confidently." features={[
  "Unlimited Chat",
  "Priority Support",
  "Customizable Settings",
  "Advanced Analytics",
  "Faster Response Speed"
]} buttonText="Upgrade Now" />
<CardPrice setBank={setBank} title="Ultra Plan" description="Built for enterprises and high-demand users who need maximum performance and full access to all features. The Ultra plan offers unlimited storage, advanced analytics, top-level security, and 24/7 dedicated support. It’s the ultimate solution for large teams and businesses that rely heavily on performance, speed, and reliability. With exclusive tools and priority infrastructure, this plan ensures your operations run at peak efficiency without limitations." features={[
  "Unlimited Chat",
  "24/7 Dedicated Support",
  "Exclusive Premium Content",
  "Advanced Analytics Dashboard",
  "Maximum Performance Speed",
  "Enterprise-Level Security",
  "Early Access to New Features"
]} buttonText="Upgrade Now" />

      
    </div>
    </>
  )
}
