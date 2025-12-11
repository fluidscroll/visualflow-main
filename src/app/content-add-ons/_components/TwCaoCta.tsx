import TwIndigoCtaBtn from "@/components/TwIndigoCtaBtn";


export default function TwCaoCta() {
  return (
    <div className="bg-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:flex lg:items-center lg:justify-between md:px-20 2xl:px-24">
        <h2 className="max-w-2xl font-open-sans text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Bring your content alive.
        </h2>
        <TwIndigoCtaBtn 
          label='Contact us'
          subject='General Enquiry - Content Add-ons' 
        />
      </div>
    </div>
  )
}

