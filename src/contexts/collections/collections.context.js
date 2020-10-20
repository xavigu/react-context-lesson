import { createContext } from "react";
import SHOP_DATA from "./shop.data";

// create new context that store SHOP_DATA like initial value
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
