import Image from 'next/image'


const testimonials = [
  {
    body: "VisualFlow brought expertise in digital design, with a flexible and iterative approach to development and a highly collaborative working style. These qualities were instrumental in the successful launch of a suite of high-quality, impactful training resources tailored for the healthcare and education sectors.",
    author: {
      name: "Noor Nixon | Project Lead",
      company: "University of the West of England (NHS England)",
      handle: "noor",
      imageUrl: "/images/noor_nixon.jpeg",
    },
  },
  // {
  //   body: "James was a dream to work with on our Sing With House Gospel Choir session as with his photos captured the HGC energy, community and culture, as well as effortlessly immersing into the the team. James was also additional great support on other aspects of the project, it felt like he’d worked with us for years.",
  //   author: {
  //     name: "Natasha",
  //     company: "House of Gospel Choir",
  //     handle: "natasha",
  //     imageUrl: "/images/lady.avif",
  //   },
  // },
  {
    body: "We wanted a collaboration partner to help us develop a short digital course to give people the tools they need to drive their careers forward. We hadn’t done anything like this before and VisualFlow guided us on content format, structure and design, made filming easy and stress free for our contributors, and quickly pulled together an engaging course aligned to our brand identity, and expertly edited.",
    author: {
      name: "Verity Stroud | Head of Talent & Capability",
      company: "Miller (Financial services and Insurance)",
      handle: "verity",
      imageUrl: "/images/VSMiller.jpg",
    },
  },
  // {
  //   body: "James and I co-created a range of intercultural communication resources for the healthcare sector. James is creative, patient and a real pleasure to work with. I feel I learned a huge amount from him about what makes engaging media and online content, which I can take forward into my own projects. I would whole-heartily recommend James and his team.",
  //   author: {
  //     name: "Jo Bloxham | Director of Kynfolk",
  //     company: "Kynfolk",
  //     handle: "Jo",
  //     imageUrl: "/images/Kyn_profile.jpeg",
  //   },
  // },
];

export default function TwTestimonials() {
  return (
    <div className="bg-white pt-22 pb-26 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-sky-800">
          <h2 className="text-base/7 font-semibold">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Our clients experience</p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
  <div className="grid grid-cols-1 gap-4 -mt-8 sm:grid-cols-2 sm:-mx-4 sm:text-[0] xl:grid-cols-2">

            {testimonials.map((testimonial) => (
              <div key={testimonial.author.company} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-100 py-8 px-4 sm:p-8 text-md/6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900 font-open-sans">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                 <figcaption className="mt-6 flex items-center gap-x-4">
  <Image 
    alt={`image of ${testimonial.author.name}`} 
    src={testimonial.author.imageUrl}
    width={100}
    height={100}
    className="size-28 rounded-full bg-gray-50" 
  />
  <div>
    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
    <div className="text-gray-700 text-sm">{testimonial.author.company}</div>
    {/* <div className="text-gray-500 text-sm">{`@${testimonial.author.handle}`}</div> */}
  </div>
</figcaption>

                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="mt-10 flex justify-center gap-x-6">
                <a href="#bespoke-learning" className="rounded-md bg-sky-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">Meet the Founder of VisualFlow</a>
              </div> */}
    </div>
  )
}
