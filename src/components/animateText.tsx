
interface IProps {
    text: string
}
const AnimatedText = ({ text }:IProps) => {
  return (
    <div className="group inline-block">
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block relative">
          <span
            className={`inline-block transition-transform duration-200 transform group-hover:-translate-y-full`}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {char}
          </span>

          <span
            className={`absolute inline-block transition-transform duration-200 transform group-hover:translate-y-[0px] translate-y-full`}
            style={{
              left: 0,
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
