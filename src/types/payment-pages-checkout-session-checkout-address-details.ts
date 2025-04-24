import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCheckoutAddressDetails = {
  address: Address;
  /**
   * Customer name.
   */
  name: string;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCheckoutAddressDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCheckoutAddressDetails = {
  address: External$Address;
  name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCheckoutAddressDetails
 */
const SchemaIn$PaymentPagesCheckoutSessionCheckoutAddressDetails: z.ZodType<
  PaymentPagesCheckoutSessionCheckoutAddressDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCheckoutAddressDetails
 */
const SchemaOut$PaymentPagesCheckoutSessionCheckoutAddressDetails: z.ZodType<
  External$PaymentPagesCheckoutSessionCheckoutAddressDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCheckoutAddressDetails // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCheckoutAddressDetails = {
  in: SchemaIn$PaymentPagesCheckoutSessionCheckoutAddressDetails,
  out: SchemaOut$PaymentPagesCheckoutSessionCheckoutAddressDetails,
};
