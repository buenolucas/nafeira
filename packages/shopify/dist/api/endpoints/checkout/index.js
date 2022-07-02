import { createEndpoint } from "@nafeira/commerce/api";
import checkoutEndpoint from "@nafeira/commerce/api/endpoints/checkout";
import getCheckout from "./get-checkout";
export const handlers = {
    getCheckout
};
const checkoutApi = createEndpoint({
    handler: checkoutEndpoint,
    handlers
});
export default checkoutApi;
