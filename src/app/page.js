import { Inter } from 'next/font/google';
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
} from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';

export const metadata = {
  title: 'Vishal Biswas | About me',
};

const mainFont = Inter({ subsets: ['latin'] });

function Title({ children }) {
  return <h1 className="text-3xl">{...children}</h1>;
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl mb-1 border-b-2 border-primary first-letter:font-semibold">
      {...children}
    </h2>
  );
}

function ContentTitle({ children }) {
  return <h3 className="text-xl font-bold">{...children}</h3>;
}

function ProgressBar({ filled, name, experience, children }) {
  const percent = filled * 100 + '%';
  return (
    <div className="relative text-sm mb-1">
      <div
        className="rounded-sm bg-primary absolute h-full"
        style={{ width: percent }}
      ></div>
      <div className="relative px-2 py-1 leading-none flex">
        <span className="font-bold">{name}</span>
        <span className="ml-auto">{experience}</span>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-primary py-1 px-2 text-sm inline-block mr-1 mb-1 leading-none font-medium text-black">
      {...children}
    </span>
  );
}

function Calendar({ children, ...props }) {
  return (
    <p {...props}>
      <CalendarIcon className="h-5 w-5 text-primary inline-block mr-1" />
      {...children}
    </p>
  );
}

function Website({ children, className, ...props }) {
  return (
    <a className={clsx('block', className)} target="_blank" {...props}>
      <LinkIcon className="h-5 w-5 text-primary inline-block mr-1" />
      {...children}
    </a>
  );
}

function Logo({ name, alt }) {
  return (
    <Image
      src={'/logos/' + name}
      alt={alt}
      width={50}
      height={50}
      className="m-2"
      title={alt}
    />
  );
}

export default function Home() {
  return (
    <main
      className={clsx(
        'min-h-screen block mx-auto text-gray-700 xl:w-3/4 2xl:w-2/4',
        mainFont.className
      )}
    >
      <div className="border-b p-4 flex flex-wrap justify-center sm:justify-between">
        <div className="max-w-40 me-5 grow-0 mb-3">
          <Image
            src="/profile_pic.jpg"
            width={200}
            height={200}
            alt="Image of Vishal Biswas"
            className="mb-3 rounded-full w-auto h-auto"
          />
        </div>

        <div className="sm:max-w-52 mb-3 me-5">
          <Title className="text-center sm:text-start">Vishal Biswas</Title>
          <p className="text-center sm:text-start">Full-stack Developer</p>
          <a href="mailto:vshlbiswas@ymail.com" className="mt-3 block">
            <EnvelopeIcon className="h-5 w-5 text-primary inline-block mr-1" />
            vshlbiswas@ymail.com
          </a>
          <a href="tel:+918286668051" className="block mt-1">
            <PhoneIcon className="h-5 w-5 text-primary inline-block mr-1" />
            828 666 8051
          </a>
          <div className="flex">
            <Website
              href="https://www.linkedin.com/vishalbiswas"
              className="mt-1 me-3"
            >
              LinkedIn
            </Website>
            <Website
              href="https://www.github.com/vishalbiswas"
              className="mt-1"
            >
              GitHub
            </Website>
          </div>
          <a
            href="https://vishalbiswas.github.io"
            target="_blank"
            className="text-nowrap block mt-1"
          >
            <GlobeAltIcon className="h-5 w-5 text-primary inline-block mr-1" />
            vishalbiswas.github.io
          </a>
        </div>

        <div className="sm:hidden w-full"></div>

        <div className="grow min-w-52 mb-3 sm:max-w-52 sm:ms-auto">
          <SectionTitle>Skills</SectionTitle>
          <ProgressBar
            filled={1}
            name="Vue.js"
            experience="5 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={1}
            name="Angular"
            experience="5 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={4 / 5}
            name="NodeJS"
            experience="4 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={4 / 5}
            name="AWS"
            experience="4 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={2 / 5}
            name="React"
            experience="2 yrs"
          ></ProgressBar>
          <ProgressBar
            filled={2 / 5}
            name="Python"
            experience="2 yrs"
          ></ProgressBar>
        </div>

        {/* <div className="mt-5 mb-5">
          <SectionTitle>Hobby projects</SectionTitle>
          <p>Part time contributor to open source projects</p>
        </div> */}

        {/* <div className="mt-auto">
          <SectionTitle>Technologies</SectionTitle>
          <div className="flex justify-around flex-wrap items-center">
            <Logo name="vue.svg" alt="Vue.js" />
            <Logo name="angular.svg" alt="Angular" />
            <Logo name="react.svg" alt="React.js" />
            <Logo name="next.svg" alt="Next.js" />
            <Logo name="node.svg" alt="Node.js" />
            <Logo name="aws.svg" alt="Amazon Web Services" />
            <Logo name="firebase.svg" alt="Firebase" />
            <Logo name="python.svg" alt="Python" />
            <Logo name="wordpress.svg" alt="Wordpress" />
            <Logo name="stripe.svg" alt="Stripe" />
            <Logo name="mapbox.svg" alt="Mapbox" />
            <Logo name="usps.svg" alt="United States Postal Service" />
            <Logo name="highcharts.svg" alt="Highcharts" />
            <Logo name="google-maps.svg" alt="Google Maps" />
            <Logo name="chartjs.svg" alt="Chart.js" />
          </div>
        </div> */}
      </div>
      <div className="w-100 p-4">
        <SectionTitle>Projects</SectionTitle>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>Geofactor</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2022 - Present</Calendar>
            <Website href="https://geofactor.com">geofactor.com</Website>
          </div>
          <div>
            <Badge>React</Badge>
            <Badge>Vue.js</Badge>
            <Badge>NodeJS</Badge>
            <Badge>MongoDB</Badge>
            <Badge>MySQL</Badge>
            <Badge>AWS EC2</Badge>
            <Badge>AWS S3</Badge>
            <Badge>AWS SES</Badge>
            <Badge>AWS CloudWatch</Badge>
            <Badge>Python</Badge>
            <Badge>Laravel</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Up to <span className="font-semibold">600k data points</span>{' '}
              visualized on a map with instant demographic filtering.
            </li>
            <li>Migrated UI + Functionality from Vue to React.</li>
            <li>
              Stateless NodeJS microservice to isolate interaction with
              3rd-party service providers.
            </li>
            <li>
              <span className="font-semibold">OAuth2 SSO</span> as an identity
              provider for white-labelling.
            </li>
            <li>
              Diverse campaign management flow including Predictive Modelling,
              Digital Ads and Postcards.
            </li>
            <li>
              Crafted a beautiful and cohesive tracking / analytical dashboard.
            </li>
            {/* <li>Implemented a fetch-and-cache micro-service delivering USPS delivery route data for rendering on the front-end map.</li> */}
            {/* <li>Integrated with a third-party service for the creation and management of prediction models on the main backend.</li> */}
            <li>
              <span className="font-semibold">Boosted PageSpeed</span> using
              Wordpress for reusable landing page templates.
            </li>
            {/* <li>Established jobs to interact with third-party services, for dispatching proof/print jobs and handling the creation of Informed Delivery email campaigns.</li> */}
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>Custom Solution: Print Optimizer</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2023</Calendar>
          </div>
          <div>
            <Badge>NodeJS</Badge>
            <Badge>MongoDB</Badge>
            <Badge>AWS Lambda</Badge>
            <Badge>AWS EC2</Badge>
            <Badge>AWS S3</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              100k Letter PDFs processed daily using OCR for reading address and
              overlaying barcodes.
            </li>
            <li>
              <span className="font-semibold">1,000+ parallel execution</span>{' '}
              units of print sub-processes using MongoDB as master store.
            </li>
            <li>
              Scaled up NodeJS microservices for each sub-processing step using{' '}
              <span className="font-semibold">AWS Lambda</span>.
            </li>
            <li>
              Strict SLA adherence, incident postmortems on{' '}
              <span className="font-semibold">Atlassian Confluence</span> and
              resolution support.
            </li>
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>EDDMStore</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2020 - 2022</Calendar>
          </div>
          <div>
            <Badge>Vue.js</Badge>
            <Badge>NodeJS</Badge>
            <Badge>MongoDB</Badge>
            <Badge>MySQL</Badge>
            <Badge>AWS EC2</Badge>
            <Badge>AWS S3</Badge>
            <Badge>Python</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Canva-like design studio with personalized content for each
              recipient.
            </li>
            <li>
              NodeJS microservice to{' '}
              <span className="font-semibold">serve 200k+ EDDM routes</span>{' '}
              optimally cached in MongoDB.
            </li>
            <li>
              NodeJS based Design to PDF automation microservice (puppeteer) for
              printing.
            </li>
            <li>
              <span className="font-semibold">Flask microservice</span> to
              transform user customized design to a print ready format for 10k+
              recipients.
            </li>
            <li>
              IndexedDB based{' '}
              <span className="font-semibold">custom state management</span> to
              restore draft campaigns in milliseconds.
            </li>
            <li>
              Extended mapbox with a custom-made polygon / geofence drawing
              plugin.
            </li>
            <li>
              Adobe <span className="font-semibold">InDesign plugin</span> to
              convert design templates into Web compatible format.
            </li>
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>Talking Rhino</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2020</Calendar>
            <Website href="https://talkingrhino.ai">talkingrhino.ai</Website>
          </div>
          <div>
            <Badge>NodeJS</Badge>
            <Badge>AWS Lambda</Badge>
            <Badge>AWS EC2</Badge>
            <Badge>AWS S3</Badge>
            <Badge>AWS RDS</Badge>
            <Badge>Laravel Lumen</Badge>
            <Badge>Angular</Badge>
            <Badge>Android</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Designed a story/learning app for Amazon Alexa and Google Home
              using NodeJS and AWS Lambda.
            </li>
            <li>
              Devised an advanced{' '}
              <span className="font-semibold">recognition algorithm</span> to
              assess the child&apos;s spoken words for pronunciation accuracy.
            </li>
            <li>
              Integrated with Firebase to send targeted marketing and bulk
              scheduled notifications to users on Android and iOS.
            </li>
            <li>
              Complied with Google and Amazon&apos;s policies regarding apps for
              kids.
            </li>
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>White-labelled Investment Platform</ContentTitle>
          <div className="flex mb-1">
            <Calendar>2019 - 2020</Calendar>
          </div>
          <div>
            <Badge>Angular</Badge>
            <Badge>AWS Rekognition</Badge>
            <Badge>Angular Material</Badge>
            <Badge>NativeScript</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Goal based investment app white-labelled by{' '}
              <span className="font-semibold">5+ globally renowned</span> banks.
            </li>
            <li>
              <span className="font-semibold">Online camera e-KYC</span> using
              AWS Rekognition confidence scores.
            </li>
            <li>
              Modularize monolithic app into compartments for{' '}
              <span className="font-semibold">
                role and white-label based activations.
              </span>
            </li>
            <li>HTML-to-PDF report generation using wkhtmltopdf.</li>
            <li>
              Created a{' '}
              <span className="font-semibold">Progressive Web App (PWA)</span>{' '}
              with Angular Material for a native-like app experience.
            </li>
            <li>
              Mentored junior developers and conducted{' '}
              <span className="font-semibold">code review</span> discussions.
            </li>
          </ul>
        </div>

        <div className="mb-3 border-b pb-3">
          <ContentTitle>PICKL</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2018 - 2019</Calendar>
            <Website href="https://pickl.pro">pickl.pro</Website>
          </div>
          <div>
            <Badge>Vue.js</Badge>
            <Badge>Laravel</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Role-based UI feature activation (Brand, Admin, Superadmin).
            </li>
            {/* <li>Streamlined the payment flow for subscription tiers using Stripe.</li> */}
            <li>
              Comprehensive analytics dashboard with metrics on revenue and
              engagement.
            </li>
            <li>
              <span className="font-semibold">Impersonation</span> - admins can
              perform any action on behalf of a brand.
            </li>
            <li>Subscription and transaction systems powered by Stripe.</li>
          </ul>
        </div>

        <div className="mb-3">
          <ContentTitle>Alumni Alliances</ContentTitle>
          <div className="flex mb-1">
            <Calendar className="mr-2">2018</Calendar>
            <Website href="https://alumnialliances.com">
              alumnialliances.com
            </Website>
          </div>
          <div>
            <Badge>Angular</Badge>
            <Badge>AWS EC2</Badge>
            <Badge>AWS S3</Badge>
            <Badge>AWS CloudFront</Badge>
            <Badge>Android</Badge>
          </div>
          <ul type="disc" className="mt-2 text-sm leading-relaxed">
            <li>
              Developed a <span className="font-semibold">custom CRM</span> for
              comprehensive user and resource management on the main site.
            </li>
            <li>
              Enhanced SEO performance by leveraging{' '}
              <span className="font-semibold">Angular Universal</span> to
              perform Server-Side Rendering on posts and user profiles.
            </li>
            <li>
              Optimized marketing workflow with{' '}
              <span className="font-semibold">Conversion Tracking</span> and
              solving{' '}
              <span className="font-semibold">Email Deliverability</span>{' '}
              issues.
            </li>
            <li>
              Established a Display Ads mechanism enabling 3rd party sellers to
              effectively market their products.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-100 p-4 sm:flex">
        <div className="basis-0 grow mb-3 sm:me-5 sm:mb-0">
          <SectionTitle>Experience</SectionTitle>
          <div>
            <ContentTitle>Volga Infotech</ContentTitle>
            <p>Web Developer</p>
            <p>2018 - Present</p>
          </div>
        </div>

        <div className="basis-0 grow">
          <SectionTitle>Education</SectionTitle>
          <div>
            <ContentTitle>BCA</ContentTitle>
            <p>YCMOU</p>
            <p>2017</p>
          </div>
        </div>
      </div>
    </main>
  );
}
