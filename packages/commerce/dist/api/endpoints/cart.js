import { CommerceAPIError } from "../utils/errors";
import isAllowedOperation from "../utils/is-allowed-operation";
const cartEndpoint = async (ctx)=>{
    const { req , res , handlers , config  } = ctx;
    if (!isAllowedOperation(req, res, {
        GET: handlers["getCart"],
        POST: handlers["addItem"],
        PUT: handlers["updateItem"],
        DELETE: handlers["removeItem"]
    })) {
        return;
    }
    const { cookies  } = req;
    const cartId = cookies[config.cartCookie];
    try {
        // Return current cart info
        if (req.method === "GET") {
            const body = {
                cartId
            };
            return await handlers["getCart"]({
                ...ctx,
                body
            });
        }
        // Create or add an item to the cart
        if (req.method === "POST") {
            const body1 = {
                ...req.body,
                cartId
            };
            return await handlers["addItem"]({
                ...ctx,
                body: body1
            });
        }
        // Update item in cart
        if (req.method === "PUT") {
            const body2 = {
                ...req.body,
                cartId
            };
            return await handlers["updateItem"]({
                ...ctx,
                body: body2
            });
        }
        // Remove an item from the cart
        if (req.method === "DELETE") {
            const body3 = {
                ...req.body,
                cartId
            };
            return await handlers["removeItem"]({
                ...ctx,
                body: body3
            });
        }
    } catch (error) {
        console.error(error);
        const message = error instanceof CommerceAPIError ? "An unexpected error ocurred with the Commerce API" : "An unexpected error ocurred";
        res.status(500).json({
            data: null,
            errors: [
                {
                    message
                }
            ]
        });
    }
};
export default cartEndpoint;
