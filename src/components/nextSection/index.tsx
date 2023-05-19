import { RxDoubleArrowDown } from "react-icons/rx";
import Link from "next/link";
interface IProps {
  nextSection: string;
}

const NextSection = ({ nextSection }: IProps) => {
  return (
    <div className="sticky bottom-10 mt-20">
      <Link href={nextSection} replace>
        <RxDoubleArrowDown className="animate-bounce text-brand-300 sm:text-3xl text-2xl" />
      </Link>
    </div>
  );
};

export default NextSection;
