import { Raleway } from 'next/font/google';

const mainFont = Raleway({ subsets: ['latin'] });

function Title({children}) {
  return (
    <h1 className="text-3xl">
      {...children}
    </h1>
  );
}

function SectionTitle({children}) {
  return (
    <h2 className="text-2xl mb-1 border-b-2 border-purple-300 first-letter:font-semibold">
      {...children}
    </h2>
  );
}

function ContentTitle({children}) {
  return (
    <h3 className="text-xl font-bold">
      {...children}
    </h3>
  );
}

function ProgressBar({filled, name, experience, children}) {
  const percent = filled * 100 + '%';
  return (
    <div className="relative text-sm mb-1">
      <div className="rounded-sm bg-purple-300 absolute h-full" style={{width: percent}}></div>
      <div className="relative px-2 py-1 leading-none flex">
        <span className="font-bold">{name}</span>
        <span className="ml-auto">{experience}</span>
      </div>
    </div>
  );
}

function Badge({children}) {
  return (
    <span className="rounded-full bg-purple-300 py-1 px-2 text-sm inline-block mr-1 mb-1 leading-none">
      {...children}
      </span>
  );
}

export default function Home() {
  return (
    <main className={'min-h-screen flex items-stretch max-w-4xl mx-auto ' + mainFont.className}>
      <div className="w-60 flex-shrink-0 border-r p-4 flex flex-col">
        <Title>Vishal Biswas</Title>
        <p>Full-stack Developer</p>

        <a href="mailto:vshlbiswas@ymail.com" className="mt-3 block">vshlbiswas@ymail.com</a>
        <a href="tel:+918286668051" className="block">8286668051</a>

        <div className="mt-5">
          <SectionTitle>Skills</SectionTitle>
          <ProgressBar filled={1} name="Vue.js" experience="5 yrs"></ProgressBar>
          <ProgressBar filled={1} name="Angular" experience="5 yrs"></ProgressBar>
          <ProgressBar filled={3/5} name="NodeJS" experience="3 yrs"></ProgressBar>
          <ProgressBar filled={2/5} name="Android" experience="2 yrs"></ProgressBar>
          <ProgressBar filled={2/5} name="Laravel" experience="2 yrs"></ProgressBar>
          <ProgressBar filled={1/5} name="React" experience="1 yr"></ProgressBar>
        </div>

        <div className="mt-5">
          <SectionTitle>Experience</SectionTitle>
          <div>
            <ContentTitle>Volga Infotech</ContentTitle>
            <p>Web Developer</p>
            <p>2017 - Present</p>
          </div>
        </div>

        <div className="mt-5">
          <SectionTitle>Education</SectionTitle>
          <div>
            <ContentTitle>BCA</ContentTitle>
            <p>2017</p>
            <p>YCMOU</p>
          </div>
        </div>

        <div className="mt-5">
          <SectionTitle>Hobby projects</SectionTitle>
          <p>Part time contributor to open source projects</p>
        </div>

        <div className="mt-auto text-sm">
          <p>Up-to-date version is available at <a href="https://vishalbiswas.github.io" className="text-nowrap">https://vishalbiswas.github.io</a></p>
        </div>
      </div>
      <div className="w-100 p-4">
        <SectionTitle>Projects</SectionTitle>

        <div class="mb-3 border-b pb-3">
          <ContentTitle>Geofactor</ContentTitle>
          <p>2020 - Present</p>
          <div>
            <Badge>Vue.js</Badge>
            <Badge>NodeJS</Badge>
            <Badge>Amazon Web Services (AWS)</Badge>
            <Badge>Python</Badge>
            <Badge>Wordpress</Badge>
            <Badge>Laravel</Badge>
          </div>
          <p className="my-2">A multi-channel marketing platform, powered by predictive insights, featuring a design studio, response analytics, and audience visualization capabilities.</p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>Executed diverse print and email campaign workflows in Vue.js, incorporating tracking, QR-code based analytics, and an attribution analytics dashboard.</li>
            <li>Integrated Deck.gl into a visualization tool for rendering scatterplots, heatmaps, and various audience visualizations on the map.</li>
            <li>Enhanced a basic canvas-based Design Studio to support advanced features such as Variable Printing, list formatting, per-character formatting, and more.</li>
            <li>Implemented a fetch-and-cache micro-service delivering USPS delivery route data for rendering on the front-end map.</li>
            <li>Integrated with a third-party service for the creation and management of prediction models on the main backend.</li>
            <li>Developed a converter that transforms Adobe InDesign documents into files compatible with the platform&apos;s Design Studio.</li>
            <li>Created a converter generating packaged documents used by print software for large-scale print jobs.</li>
            <li>Implemented a mechanism for swiftly creating new landing pages and posts using Custom Field Suite.</li>
            <li>Established jobs to interact with third-party services, for dispatching proof/print jobs and handling the creation of Informed Delivery email campaigns.</li>
          </ul>
        </div>

        <div class="mb-3 border-b pb-3">
          <ContentTitle>Talking Rhino</ContentTitle>
          <p>2020</p>
          <div>
            <Badge>Android</Badge>
            <Badge>Laravel</Badge>
            <Badge>Angular</Badge>
            <Badge>Kotlin</Badge>
            <Badge>Firebase</Badge>
          </div>
          <p className="my-2">A children&apos;s learning app designed to minimize screen time by delivering captivating stories that enhance comprehension. Our proprietary Kiddiction algorithm engages young minds by incorporating thought-provoking questions into the narrative.</p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>Created a native Android app with Kotlin, enabling the seamless playback of stories in chapters followed by targeted questions related to each chapter.</li>
            <li>Devised an advanced recognition algorithm to assess the child&apos;s spoken words and evaluate pronunciation accuracy.</li>
            <li>Implemented a mechanism allowing teachers to connect with students in their classrooms, facilitating progress tracking through a bulk invite system.</li>
            <li>Established APIs to manage users, stories, send push notifications, and automate scheduled email chains through Sendgrid from the admin panel.</li>
          </ul>
        </div>

        <div class="mb-3 border-b pb-3">
          <ContentTitle>White-labeled Investment Platform</ContentTitle>
          <p>2018 - 2020</p>
          <div>
            <Badge>Angular</Badge>
            <Badge>Angular Material</Badge>
            <Badge>NativeScript</Badge>
          </div>
          <p className="my-2">An investment platform offering portfolio management and goal-based investment suggestions, recognized for its excellence through white-label partnerships with prominent domestic and international banks.</p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>Engineered the core app by modularizing it into standalone components, allowing flexibility to assemble them based on specific client requirements.</li>
            <li>Leveraged Highcharts to deploy diverse graph views showcasing user investment portfolios and fund performance.</li>
            <li>Led the development of a comprehensive investment workflow on the Android app, enabling users to seamlessly navigate from selecting a mutual fund and analyzing its breakdown and performance to setting up mandates on the FPX payment provider.</li>
          </ul>
        </div>

        <div class="mb-3 border-b pb-3">
          <ContentTitle>PICKL</ContentTitle>
          <p>2017 - 2018</p>
          <div>
            <Badge>Vue.js</Badge>
            <Badge>Laravel</Badge>
          </div>
          <p className="my-2">A gamified brand engagement platform.</p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>Orchestrated the brand workflow, facilitating the creation of &quot;pickls&quot; (tasks), reviewing completed pickls, and rewarding users with offers.</li>
            <li>Streamlined the payment flow for subscription tiers using Stripe.</li>
            <li>Engineered an analytics dashboard featuring comprehensive metrics on revenue and engagement.</li>
            <li>Developed an impersonation capability, empowering the admin to execute actions as any selected brand.</li>
          </ul>
        </div>

        <div class="mb-3">
          <ContentTitle>Alumni Alliances</ContentTitle>
          <p>2017</p>
          <div>
            <Badge>Angular</Badge>
            <Badge>Android</Badge>
          </div>
          <p className="my-2">Alumni Alliances serves as an exclusive alumni network dedicated to US universities.</p>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>Transformed a pre-login/landing page application into Angular Universal (SSR), enhancing SEO performance significantly.</li>
            <li>Innovated various objective-based post formats for job searching, event management, etc., incorporating tailored filtering options for each post type.</li>
            <li>Spearheaded the development of a Display Ads platform, enabling the display of ads on the user-facing app. Additionally, designed and implemented functionality for creating, submitting, and approving ads through the admin panel.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
