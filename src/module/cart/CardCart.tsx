import type { MouseEventHandler } from "react";
import { MdDeleteForever } from "react-icons/md";

interface CartCardProps {
  name: string;
  img: string;
  count: number;
  totalPrice: number;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

export const CardCart = ({
  name,
  img,
  count,
  totalPrice,
  handleDelete,
}: CartCardProps) => {
  return (
    <div className="w-full sm:max-w-lg flex items-center justify-between mb-4 p-4 rounded-lg bg-white/35 gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-4">
        <img
          src={img as string}
          alt={name as string}
          className="w-20 h-20 object-cover rounded-full mb-4"
        />
        <div className="flex flex-col items-start">
          <h4 className="text-secondary text-start">{name as string}</h4>
          <p className="max-w-52 text-start text-white">
            Cantidad: {count as number}
          </p>
          <p className="text-white">
            Total: {typeof totalPrice === "number" ? totalPrice : ""}
          </p>
        </div>
      </div>
      <button
        className="p-2 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors duration-200"
        onClick={handleDelete}
      >
        <div className="bg-secondary flex-grow rounded-xl p-2">
          <MdDeleteForever size={"20px"} color="white" />
        </div>
      </button>
    </div>
  );
};
