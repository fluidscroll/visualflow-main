import Image from 'next/image'


// const testimonials = [
  // {
  //   body: "VisualFlow brought expertise in digital design, with a flexible and iterative approach to development and a highly collaborative working style. These qualities were instrumental in the successful launch of a suite of high-quality, impactful training resources tailored for the healthcare and education sectors",
  //   author: {
  //     name: "Noor Nixon | Project Lead",
  //     company: "University of the West of England (NHS England)",
  //     handle: "noor",
  //     imageUrl: "/images/noor_nixon.jpeg",
  //   },
  // },
  // {
  //   body: "Visualflow's ability to capture our vision through cinematic storytelling was incredible. They created human-centered videos that truly inspired and connected with our audience.",
  //   author: {
  //     name: "Natasha",
  //     company: "House of Gospel Choir",
  //     handle: "natasha",
  //     imageUrl: "/images/lady.avif",
  //   },
  // },
  // {
  //   body: "We wanted a collaboration partner to help us develop a short digital course to give people the tools they need to drive their careers forward. We hadn’t done anything like this before and James guided us on content format, structure and design, made filming easy and stress free for our contributors, and quickly pulled together an engaging course aligned to our brand identity, and expertly edited.",
  //   author: {
  //     name: "Verity Stroud | Head of Talent & Capability",
  //     company: "Miller (Financial services and Insurance)",
  //     handle: "verity",
  //     imageUrl: "/images/VSMiller.jpg",
  //   },
//   // },
//   {
//     body: "James and I co-created a range of intercultural communication resources for the healthcare sector. James is creative, patient and a real pleasure to work with. I feel I learned a huge amount from him about what makes engaging media and online content, which I can take forward into my own projects. I would whole-heartily recommend James and his team.",
//     author: {
//       name: "Jo Bloxham | Director of Kynfolk",
//       company: "Kynfolk",
//       handle: "Jo",
//       imageUrl: "/images/Kyn_profile.jpeg",
//     },
//   },
// ];

// export default function TwTestimonials() {
//   return (
//     <div className="bg-white pt-0 pb-26 lg:pt-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center text-sky-800">
//           <h2 className="text-base/7 font-semibold">Testimonials</h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Our clients experience</p>
//         </div>
//         <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
//           <div className="grid grid-cols-1 -mt-8 sm:-mx-4 sm:grid-cols-1 sm:text-[0] xl:grid-cols-1">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.author.company} className="pt-8 sm:inline-block sm:w-full sm:px-4">
//                 <figure className="rounded-2xl bg-gray-100 py-8 px-4 sm:p-8 text-md/6">
//                   <blockquote className="text-gray-900 font-open-sans">
//                     <p>{`“${testimonial.body}”`}</p>
//                   </blockquote>
//                  <figcaption className="mt-6 flex items-center gap-x-4">
//   <Image 
//     alt={`image of ${testimonial.author.name}`} 
//     src={testimonial.author.imageUrl}
//     width={100}
//     height={100}
//     className="size-28 rounded-full bg-gray-50" 
//   />
//   <div>
//     <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
//     <div className="text-slate-700 text-sm">{testimonial.author.company}</div>
//     {/* <div className="text-gray-500 text-sm">{`@${testimonial.author.handle}`}</div> */}
//   </div>
// </figcaption>

//                 </figure>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* <div className="mt-10 flex justify-center gap-x-6">
//                 <a href="#bespoke-learning" className="rounded-md bg-sky-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">Meet the Founder of VisualFlow</a>
//               </div> */}
//   <p className="mt-8 text-center text-gray-900">
//   Now you have an idea of who is behind VisualFlow - contact us or{" "}
//   <a 
//     href="/#about_services" 
//     className="text-sky-800 underline font-semibold hover:underline hover:decoration-sky-500 hover:text-sky-500"
//   >
//     explore our services
//   </a>.
// </p>  
// </div>
//   )
// }




export default function Example() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="mx-auto mt-2 max-w-xl text-center text-xl font-semibold tracking-tight text-balance text-sky-900 sm:text-xl">
          What is it like to work with James?
        </h2>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-sky-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-blue-600/10 ring-sky-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        /> */}
        <figure className="mt-10">
          <blockquote className="text-center mt-6  font-open-sans text-gray-900 text-lg/8 text-gray-900 sm:text-2xl/9">
            <p>
              “James and I co-created a range of intercultural communication resources for the healthcare sector. 
              James is creative, patient and a real pleasure to work with. I feel I learned a huge amount from him about what 
              makes engaging media and online content, which I can take forward into my own projects. 
              I would whole-heartily recommend James and his team.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="Profile picture of client"
              src="/images/Kyn_profile.jpeg"
              className="mx-auto size-23 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-1 text-base">
              <div className="font-semibold text-gray-900">Jo Bloxham |</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                {/* <circle r={1} cx={1} cy={1} /> */}
              </svg>
              <div className="text-base text-gray-800">Director of Kynfolk</div>
            </div>
          </figcaption>
        </figure>
      </div>

 {/* <h2 className="mx-auto mt-2 max-w-xl text-center text-xl font-semibold tracking-tight text-balance text-sky-900 sm:text-xl">
          Testimonial
        </h2> */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-sky-100),white)] opacity-20 " />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-blue-600/10 ring-sky-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        /> */}
        <figure className="mt-10">
          <blockquote className="text-center mt-20  font-open-sans text-gray-900 text-lg/8 text-gray-900 sm:text-2xl/9">
            <p>
              “James was a dream to work with on our Sing With House Gospel Choir session as with his photos captured the HGC energy, community and culture, as well as effortlessly immersing into the the team. 
              James was also additional great support on other aspects of the project, it felt like he’d worked with us for years.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="profile image of client"
              src="/images/Natasha_G.jpeg"
              className="mx-auto size-23 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-1 text-base">
              <div className="font-semibold text-gray-900">Nastasha |</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                {/* <circle r={1} cx={1} cy={1} /> */}
              </svg>
              <div className="text-base text-gray-800">Marketing & Special Projects Manager - House Gospel Choir</div>
            </div>
          </figcaption>
        </figure>
      </div>


    </section>
  )
}






