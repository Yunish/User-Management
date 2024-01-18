import Image from "../Image/Image";

interface ICard {
  children: React.ReactNode;
  className?: string;
}
function Card({ children }: ICard) {
  return (
    <div className="bg-gray max-w-sm w-full lg:max-w-full lg:flex">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-4 col-span-4">
          <Image />
        </div>
        <div className="col-start-1 col-end-8">
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
