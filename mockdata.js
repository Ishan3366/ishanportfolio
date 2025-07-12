export const skillsData = [
  [
    {
      icon: `<i class="d-flex justify-content-center bi bi-trophy fs-1 fw-bolder text-warning mt-3"></i>`,
      title: "Skills",
      framework: [
        {
          name: "Google Ads",
          icon: `bi bi-google`,
        },
        {
          name: "Facebook & Instagram Ads",
          icon: `bi bi-meta`, // Use an appropriate icon here
        },
        {
          name: "Bing Ads",
          icon: `bi bi-microsoft`, // Use an appropriate icon here
        },
        {
          name: "Conversion Tracking Setup",
          icon: `bi bi-bar-chart-line`,
        },
        {
          name: "Audience Targeting & Remarketing",
          icon: `bi bi-people`,
        },
        {
          name: "Keyword Research & Campaign Structuring",
          icon: `bi bi-search`,
        },
        {
          name: "Ad Copywriting & Creative Suggestions",
          icon: `bi bi-pencil-square`,
        },
        {
          name: "A/B Testing & Performance Analysis",
          icon: `bi bi-sliders`,
        },
        {
          name: "Budget Management & Scaling Strategies",
          icon: `bi bi-cash-coin`,
        },
        {
          name: "Google Analytics & GA4 Reporting",
          icon: `bi bi-graph-up`,
        },
        {
          name: "Campaign Optimization for Lower CPC & Higher ROAS",
          icon: `bi bi-speedometer2`,
        },
        {
          name: "Weekly Reporting & Strategic Recommendations",
          icon: `bi bi-journal-text`,
        },
      ],
      classes: "col-md-6 aos-init aos-animate",
      animation: "zoom-in-left",
    },
    {
      icon: `<i class="d-flex justify-content-center bi bi-tools fs-1 fw-bolder text-warning mt-3"></i>`,
      title: "Tools",
      framework: [
        {
          name: "Google Ads Manager",
          icon: `bi bi-google`,
        },
        {
          name: "Meta Ads Manager",
          icon: `bi bi-meta`, // No official Bootstrap Icon – consider using an image or SVG
        },
        {
          name: "Microsoft Ads",
          icon: `bi bi-microsoft`,
        },
        {
          name: "Google Tag Manager",
          icon: `bi bi-hdd-network`, // Closest match; consider a custom SVG for GTM
        },
        {
          name: "Google Analytics / GA4",
          icon: `bi bi-graph-up`,
        },
        {
          name: "Google Keyword Planner",
          icon: `bi bi-search`,
        },
        {
          name: "Google Looker Studio",
          icon: `bi bi-kanban`, // Closest match; consider a Looker logo as image
        },
        {
          name: "Meta Pixel & Conversion API",
          icon: `bi bi-code-slash`, // Custom SVG would work better
        },
        {
          name: "Microsoft Clarity",
          icon: `bi bi-eye`, // or `bi bi-graph-up-arrow`
        },
        {
          name: "Canva",
          icon: `bi bi-brush`, // Canva doesn't have a Bootstrap icon, use an image/SVG if needed
        },
        {
          name: "Semrush / Ubersuggest",
          icon: `bi bi-globe`, // Consider using custom SVG logos
        },
        {
          name: "ChatGPT",
          icon: `bi bi-chat-text`, // Custom OpenAI icon might be more appropriate
        },
      ],
      classes: "border-custom col-md-6 aos-init aos-animate",
      animation: "zoom-in-right",
    },
  ],
];

export const experienceData = [
  {
    company: "Booming Bull Academy Pvt. Ltd.",
    duration: "Training Period",
    positon: "Digital Marketing (PPC Focus)",
    description: `
      <p class="lh-1">
        Completed training focused on practical PPC campaign strategies across Google Ads and Meta Ads.
      </p>
      <p class="lh-1">
        Gained hands-on experience in keyword planning, audience targeting, ad creation, and campaign tracking.
      </p>
      <p class="lh-1">
        Ran demo campaigns with focus on tracking setup (GTM, GA4, Meta Pixel), analytics, and performance review.
      </p>
    `,
  },
  {
    company: "Booming Bull Academy Pvt. Ltd.",
    duration: "Current",
    positon: "PPC Specialist",
    description: `
      <p class="lh-1">
        Managed PPC campaigns across Google Ads, Meta Ads (Facebook/Instagram), and Bing Ads.
      </p>
      <p class="lh-1">
        Specialized in lead generation, e-commerce sales, and local service ads.
      </p>
      <p class="lh-1">
        Set up and managed conversion tracking using GTM, GA4, and Meta Pixel.
      </p>
      <p class="lh-1">
        Conducted keyword research, ad testing, remarketing, and budget scaling.
      </p>
      <p class="lh-1">
        Delivered weekly performance reports with actionable insights and optimization plans.
      </p>
    `,
  },
  {
    company: "Self-Employed (LinkedIn Clients)",
    duration: "Freelance",
    positon: "Freelance PPC Expert",
    description: `
      <p class="lh-1">
        Provided full-service ad campaign management to international clients via LinkedIn.
      </p>
      <p class="lh-1">
        Handled campaign setup, optimization, and reporting for Google Search, Display, and Performance Max.
      </p>
      <p class="lh-1">
        Focused on conversion-driven strategy, audience targeting, and remarketing.
      </p>
      <p class="lh-1">
        Helped clients lower CPC and improve ROAS through data-backed optimizations.
      </p>
    `,
  },
];


export var words = [
    "PPC Expert",
    "Performance marketer",
    "Google Ads Expert",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

export const educationDetails = [
  {
    year: "Dec 2020 - Jul 2024",
    class: "B.Tech in Computer Science Engineering",
    address: "Ambala College of Engineering and Applied Research",
  },
  {
    year: "2018 - 2019",
    class: "XII, Non-Medical",
    address: "DAV Public School, Ambala",
  },
  {
    year: "2016 - 2017",
    class: "X, General",
    address: "DAV Public School, Ambala Cantt",
  },
];

export const projectsData = [
  {
    title: "Multi-Channel E-commerce Campaign",
    description: `
      <p>I managed a multi-channel e-commerce campaign on Google Ads with a focus on generating both leads and online purchases.</p>
      <ul>
        <li>Combined Search, Video, and Performance Max campaigns.</li>
        <li>Focused on precision targeting and clear ad messaging.</li>
        <li>Delivered strong ROI with increased traffic and conversions.</li>
      </ul>
    `,
    images: ["images/project_1_a.jpeg", "images/project_1_b.jpeg"],
  },
  {
    title: "Real Estate Lead Generation (Google Ads)",
    description: `
      <p>I recently worked on a real estate lead generation project where I handled the entire Google Ads setup — from strategy to execution. The goal was to drive quality buyer leads through highly targeted Search campaigns, and the results were strong.</p>
      <ul>
        <li>121 conversions at just CA$122 cost per acquisition</li>
        <li>Average CPC kept low at CA$2.32 using smart keyword targeting</li>
        <li>Conversion rate of 1.89% through optimized ad flow</li>
      </ul>
    `,
    images: ["images/project_2_a.jpeg","images/project_2_b.jpeg"],
  },
  {
    title: "E-commerce Meta Ads Campaign",
    description: `
      <p>Managed a Meta (Facebook) Ads campaign for e-commerce brand with a total spend of ₹3,451. Achieved 24 purchases across 10 ad sets, with CPP ranging from ₹94 to ₹415 and CTRs above 2.5%.</p>
      <ul>
        <li>Tested 10+ creatives</li>
        <li>Targeted mobile-first shoppers</li>
        <li>Tracked performance daily and scaled top performers</li>
      </ul>
    `,
    images: ["images/project_3_b.jpeg", "images/facebook ads 2.jpg"],
  },
];
