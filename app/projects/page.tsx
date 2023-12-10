import Link from 'next/link';
import Image from "next/image";
import IMG1 from "@/public/Images/1.jpg";
import IMG2 from "@/public/Images/2.jpg";
import IMG3 from "@/public/Images/3.jpg";
import IMG4 from "@/public/Images/4.jpg";
import IMG5 from "@/public/Images/5.jpg";
import IMG6 from "@/public/Images/6.jpg";
export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products developers, and
          along the way, teach the next generation of developers. Here's a
          summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
        <div className="columns-2 sm:columns-3 gap-4 my-8">
          <div className="relative h-40 mb-4">
            <Image
                alt="Me speaking on stage at React Summit about the future of Next.js"
                src={IMG1}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80 mb-4 sm:mb-0">
            <Image
                alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                src={IMG2}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
          <div className="relative h-40 sm:h-80 sm:mb-4">
            <Image
                alt="Me standing on stage at Reactathon delivering the keynote"
                src={IMG3}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative h-40 mb-4 sm:mb-0">
            <Image
                alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                src={IMG4}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40 mb-4">
            <Image
                alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                src={IMG5}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80">
            <Image
                alt="My badge on top of a pile of badges from a Vercel meetup we held"
                src={IMG6}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
