import TwIndigoCtaBtn from "@/components/TwIndigoCtaBtn";


export default function TwVpCta() {
  return (
    <div className="bg-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:flex lg:items-center lg:justify-between md:px-12 2xl:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight font-open-sans text-gray-900 sm:text-5xl">
          Craft video content with us.
        </h2>
        <TwIndigoCtaBtn 
          label='Contact us'
          subject='General Enquiry - Video Production' 
        />
      </div>
    </div>
  )
}
