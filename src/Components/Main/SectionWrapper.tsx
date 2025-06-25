type Props = { id: string; children: React.ReactNode };

const SectionWrapper = ({ id, children }: Props) => {
  return (
    <section
      className="pt-28 md:pt-36 pb-16 md:pb-24 px-2 md:px-0 max-w-7xl mx-auto w-full animate-fadeIn"
      id={id}
      tabIndex={-1}
      aria-label={id.charAt(0).toUpperCase() + id.slice(1) + ' section'}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
