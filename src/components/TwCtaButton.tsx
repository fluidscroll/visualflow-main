
type TwCtaButtonProps = {
  label: string;
  subject: string;
};

export default function TwCtaButton({ label, subject }: TwCtaButtonProps) {
    return (
        <button type="button" className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0 font-nexa-book">
          <a
             href="https://calendly.com/james-visualflow/30min"
      target="_blank"
      rel="noopener noreferrer"
            className="rounded-md bg-sky-700 px-5 py-4 text-md text-white shadow-xs hover:bg-sky-600 transition-all active:outline-2"
          >
            {label}
          </a>
        </button>
    )
}