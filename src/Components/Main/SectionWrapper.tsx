type Props = { id: string; children: React.ReactNode };

const SectionWrapper = ({ id, children }: Props) => {
  return (
    <section
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto w-full animate-fadeIn"
      id={id}
      tabIndex={-1}
      aria-label={id.charAt(0).toUpperCase() + id.slice(1) + ' section'}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
