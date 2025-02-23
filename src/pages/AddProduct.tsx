import { useMutation } from "@tanstack/react-query";
import ProductForm, { ProductFormInput } from "../components/ProductForm";
import axios from "../utils/AxiosInstance";

const addProduct = async (data: ProductFormInput) => {
  return await axios.post("/product", data);
};

const AddProduct = () => {
  const { mutate } = useMutation({
    mutationFn: addProduct,
  });
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-10">Add Product</h2>
      <ProductForm isEdit={false} mutateFn={mutate} />
    </div>
  );
};

export default AddProduct;
