import { getCommerceProvider, useCommerce as useCoreCommerce } from "@nafeira/commerce";
import { shopifyProvider } from "./provider";
export { shopifyProvider };
export const CommerceProvider = getCommerceProvider(shopifyProvider);
export const useCommerce = ()=>useCoreCommerce();
