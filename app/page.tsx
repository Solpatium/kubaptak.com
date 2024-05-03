import Image from "next/image";

const LinkButton: React.FC<{ children: string, href: string }> = (props) => {
  return <a href={props.href} className="block md:inline-block bg-gray-900 text-white text-center text-[24px] py-[8px] px-[32px] hover:underline">{props.children}</a>
}

const Link: React.FC<{ children: string, href: string }> = (props) => {
  return <a className="underline" href={props.href}>{props.children}</a>
}

const Blob: React.FC<{ className: string, scale: number }> = ({ className, scale }) => {
  return <svg role="presentation" className={className} xmlns="http://www.w3.org/2000/svg" width={322 * scale} height={303 * scale} viewBox={`0 0 ${322 * scale} ${scale * 303}`} fill="none">
    <filter id={`filter${scale}`} x='0' y='0'>
      <feTurbulence
        type='fractalNoise'
        baseFrequency='0.75'
      />
      <feBlend in='SourceGraphic' mode='multiply' />
    </filter>
    <mask id={`mask${scale}`}>
      <path d="M182.183 247.402C202.908 211.396 214.759 200.152 256.509 176.881C296.497 154.593 312.082 140.673 317.946 122.016C335.235 67.0074 291.689 11.5666 223.385 1.62711C144.155 -9.9081 45.324 41.2092 10.2316 113.12C-10.6094 155.823 1.35601 225.226 37.3256 270.283C84.098 328.865 151.404 300.858 182.183 247.402Z" fill="#FFFFFF" transform={`scale(${scale},${scale})`} />
    </mask>
    <rect filter={`url(#filter${scale})`} mask={`url(#mask${scale})`} x="0" y="0" width={500 * scale} height={500 * scale} fill="#5547FF" />
  </svg>
}

const LinkedInIcon: React.FC<{ className: string }> = ({ className }) => {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img">
    <title>LinkedIn</title>
    <path d="M6.19727 4.11205C6.19699 4.67192 5.97562 5.20875 5.58185 5.60444C5.18809 6.00013 4.65418 6.22227 4.09759 6.22199C3.54099 6.22171 3.00731 5.99903 2.61393 5.60295C2.22056 5.20686 1.99972 4.66981 2 4.10994C2.00028 3.55007 2.22165 3.01324 2.61542 2.61755C3.00919 2.22186 3.54309 1.99972 4.09969 2C4.65628 2.00028 5.18996 2.22296 5.58334 2.61904C5.97671 3.01513 6.19755 3.55218 6.19727 4.11205ZM6.26023 7.78518H2.06296V21H6.26023V7.78518ZM12.8919 7.78518H8.71564V21H12.8499V14.0654C12.8499 10.2023 17.8552 9.8434 17.8552 14.0654V21H22V12.6299C22 6.11749 14.5918 6.36026 12.8499 9.55841L12.8919 7.78518Z" fill="black" />
  </svg>
}

const LeftColumn = () => {
  return <aside className="lg:max-w-[500px] w-full relative">
    <div className="lg:sticky top-0 flex flex-col md:flex-row lg:flex-col gap-[64px]">
      <div className="relative mb-[64px] shrink-0">
        <Image
          src="/photo.png"
          alt="Kuba's photo"
          className="m-auto rounded-full border border-gray-900 h-auto"
          width={288}
          height={288}
          priority
        />
        {/* Big */}
        <Blob scale={2.5} className="md:hidden absolute top-[-350px] left-[-300px] md:top-5 md:left-0 lg:top-[50px] lg:left-[150px] z-[-1]" />
        {/* Small */}
        <Blob scale={1} className="hidden md:block absolute top-5 left-0 lg:top-[50px] lg:left-[150px] z-[-1]" />
      </div>
      <div className="flex flex-col gap-[64px]">
        <header>
          <h1 className="text-[60px] xl:text-[80px] font-serif mb-[24px]">Hi! I&apos;m Kuba.</h1>
          <p>I&apos;m a software engineer. I love web apps.</p>
        </header>
        <footer>
          <p className="font-bold mb-[24px]">My social media: <a target="_blank" href="https://www.linkedin.com/in/jakub-ptak/"><LinkedInIcon className="inline-block mt-[-2px]" /></a></p>
          <LinkButton href="mailto:contact@kubaptak.com">Contact me</LinkButton>
        </footer>
      </div>
    </div>
  </aside>
}

const GreatResume = () => {
  return <article className="flex flex-col gap-[16px]">
    <h3 className="font-bold text-[24px]">Great Resume</h3>
    <Image
      src="/greatresume.png"
      alt="Screenshot of greatresume.app"
      width={1234}
      height={1094}
    />
    <p>
      Web app for creating resumes. Everything happens on client&apos;s side, there are no servers. To ensure UI responsiveness, all heavy lifting is done in web workers. One web worker generates a pdf using <Link href="react-pdf.org">react-pdf</Link>. The second one renders the pdf to canvas using <Link href="https://mozilla.github.io/pdf.js/">pdf.js</Link>.
      <br />During export, resume&apos;s model is embeded in the pdf, making it possible to import it back to the app without any OCR, pretty cool.
    </p>
    <div className="text-right mt-4">
      <LinkButton href="greatresume.app">See greatresume.app</LinkButton>
    </div>
  </article>
}

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-[64px] max-w-[1400px] m-auto my-[48px] p-6">
      <LeftColumn />
      <main className="lg:max-w-[780px] w-full">
        <h2 className="text-[40px] font-serif mb-[32px]">My projects</h2>
        <GreatResume />
      </main>
    </div>
  );
}