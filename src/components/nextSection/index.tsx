import { RxDoubleArrowDown } from "react-icons/rx";

interface IProps {
  nextSection: string;
}

const NextSection = ({ nextSection }: IProps) => {
  return (
    <div className="sticky bottom-10  mt-20">
      <a href={nextSection}>
        <RxDoubleArrowDown className="animate-bounce text-brand-300 sm:text-3xl text-2xl" />
      </a>
    </div>
  );
};

export default NextSection;
