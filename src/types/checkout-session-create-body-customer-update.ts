import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls what fields on Customer can be updated by the Checkout Session. Can only be provided when `customer` is provided.
 */
export type CheckoutSessionCreateBodyCustomerUpdate = {
  address?: ("auto" | "never") | undefined;
  name?: ("auto" | "never") | undefined;
  shipping?: ("auto" | "never") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomerUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomerUpdate = {
  address?: ("auto" | "never") | undefined;
  name?: ("auto" | "never") | undefined;
  shipping?: ("auto" | "never") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomerUpdate
 */
const SchemaIn$CheckoutSessionCreateBodyCustomerUpdate: z.ZodType<
  CheckoutSessionCreateBodyCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z.enum(["auto", "never"]).optional(),
    name: z.enum(["auto", "never"]).optional(),
    shipping: z.enum(["auto", "never"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      shipping: "shipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomerUpdate
 */
const SchemaOut$CheckoutSessionCreateBodyCustomerUpdate: z.ZodType<
  External$CheckoutSessionCreateBodyCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomerUpdate // the object to be transformed
> = z
  .object({
    address: z.enum(["auto", "never"]).optional(),
    name: z.enum(["auto", "never"]).optional(),
    shipping: z.enum(["auto", "never"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      shipping: "shipping",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomerUpdate = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomerUpdate,
  out: SchemaOut$CheckoutSessionCreateBodyCustomerUpdate,
};
