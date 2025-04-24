import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Only return the Checkout Sessions for the Customer details specified.
 */
export type CheckoutSessionListCustomerDetails = {
  email: string;
};

/**
 * @internal
 * CheckoutSessionListCustomerDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionListCustomerDetails = {
  email: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionListCustomerDetails
 */
const SchemaIn$CheckoutSessionListCustomerDetails: z.ZodType<
  CheckoutSessionListCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionListCustomerDetails
 */
const SchemaOut$CheckoutSessionListCustomerDetails: z.ZodType<
  External$CheckoutSessionListCustomerDetails, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionListCustomerDetails // the object to be transformed
> = z
  .object({
    email: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
    });
  });

export const Schemas$CheckoutSessionListCustomerDetails = {
  in: SchemaIn$CheckoutSessionListCustomerDetails,
  out: SchemaOut$CheckoutSessionListCustomerDetails,
};
