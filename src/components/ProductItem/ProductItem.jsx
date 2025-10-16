import { Link } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";
import { IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  minusProductAmount,
  plusProductAmount,
} from "../../features/productSlice";
import toast from "react-hot-toast";



function ProductItem({ product }) {
  const { title, rate, image, price } = product;
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.product);

  const numberSpace = (num) => {
    num = num.toString();
    let newNum = "";
    let count = 0;

    for (let i = num.length - 1; i >= 0; i--) {
      count++;
      newNum += num[i];
      if (count % 3 === 0 && count != 0) {
        newNum += " ";
      }
    }
    return newNum.split("").reverse().join("");
  };

  const addCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    toast.success("Mahsulot savatga qo'shildi")
  };

  const plusAmount = (e) => {
    e.preventDefault();
    dispatch(plusProductAmount(product.id));
  };
  const minusAmount = (e) => {
    e.preventDefault();
    dispatch(minusProductAmount(product.id));
  };

  return (
    <li>
      <Link
        className="relative group border-2 border-gray-100 shadow-lg w-full bg-[#f6f6f6]
       h-full rounded-lg flex flex-col"
        to="/product"
      >
        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="h-full w-full group-hover:scale-105 transition duration-300 object-cover object-center rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col gap-1 px-3 py-4">
          {price == 0 ? (
            <p className="text-red-600 font-medium">Bepul</p>
          ) : (
            <p className="font-bold text-primary">{numberSpace(price)} so'm</p>
          )}

          <h2 className="relative whitespace-nowrap overflow-x-hidden">
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </h2>
          <div className="flex items-center gap-2">
            <PiStarFill className="text-star" />
            <span className="text-gray">{rate / 2}</span>
          </div>
          {productsList.find((el) => el.id == product.id) ? (
            <div className="bg-gray-400 flex items-center rounded-md px-2 py-2 justify-between">
              <button
                onClick={(e) => minusAmount(e)}
                type="button"
                className="bg-white px-3 rounded-md cursor-pointer text-black"
              >
                -
              </button>
              <p>
                {productsList.find((el) => el.id === product.id).productAmount}
              </p>
              <button
                onClick={(e) => plusAmount(e)}
                type="button"
                className="bg-white px-3 rounded-md cursor-pointer text-black"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => addCart(e)}
              type="button"
              className="btn w-full btn-primary flex items-center gap-2 text-center justify-center"
            >
              Qo'shish
              <IoCartSharp className="text-xl" />
            </button>
          )}
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
