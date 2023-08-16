import SearchFilter from "./SearchFilter/SearchFilter";
import { useOutletContext } from "react-router-dom";


function ShopPage() {
  const { addProduct } = useOutletContext();
  return (
    <section>
        <SearchFilter addProduct={addProduct}/>
    </section>
  );
}

export default ShopPage;
