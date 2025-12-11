
type TwIndigoCtaBtnProps = {
  label: string;
  subject: string;
};

export default function TwIndigoCtaBtn({ label, subject }: TwIndigoCtaBtnProps) {
  return (
    <a
      href="https://calendly.com/james-visualflow/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0 rounded-md bg-yellow-400 px-5 py-4 text-sm font-semibold text-black shadow-xs hover:bg-yellow-300 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {label}
    </a>
  );
}
