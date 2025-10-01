import type { Product } from "../../../types";
import { product } from "../../../utils/product";
import { CardProductAcordion } from "../../core/components/cards/CardProductAcordion";
import Acordion from "../../core/ui/acordion/Acordion";

export const ProductAcordion = () => {
  const cakeProduct = product.filter((e) => e.type === "torta");
  const cookiesProduct = product.filter((e) => e.type === "cookies");
  const meriendaProduct = product.filter((e) => e.type === "merienda");
  const alfajorProduct = product.filter((e) => e.type === "Alfajor");
  return (
    <div className="w-full md:hidden flex flex-col items-center gap-4">
      <Acordion>
        {/* {" "} */}
        <input type="radio" name="my-accordion-4" className="" />
        <div className="m-0 p-0 collapse-title font-semibold bg-banner bg-cover">
          <div className="w-full h-full flex justify-center items-center bg-black/45">
            <h3 className="text-teal-500">Torta</h3>
          </div>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {cakeProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
      <Acordion>
        {" "}
        <input type="radio" name="my-accordion-4" />
        <div className="m-0 p-0 collapse-title font-semibold text-white bg-bannerGalletas bg-cover bg-[center_70px]">
          <div className="w-full h-full flex justify-center items-center bg-black/45">
            <h3 className="text-teal-500">Galletas</h3>
          </div>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {cookiesProduct.map((item: Product) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
      <Acordion>
        {" "}
        <input type="radio" name="my-accordion-4" />
        <div className="m-0 p-0 collapse-title font-semibold text-white bg-bannerMerienda bg-cover bg-[center_100px]">
          <div className="w-full h-full flex justify-center items-center bg-black/45">
            <h3 className="text-teal-500">Meriendas</h3>
          </div>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {meriendaProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
      <Acordion>
        {" "}
        <input type="radio" name="my-accordion-4" />
        <div className="m-0 p-0 collapse-title font-semibold text-white bg-bannerAlfajores bg-cover bg-[center_120px]">
          <div className="w-full h-full flex justify-center items-center bg-black/45">
            <h3 className="text-teal-500">Alfajores</h3>
          </div>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {alfajorProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
    </div>
  );
};
