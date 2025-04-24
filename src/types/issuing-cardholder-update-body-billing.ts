import {
  External$IssuingCardholderUpdateBodyBillingAddress,
  IssuingCardholderUpdateBodyBillingAddress,
  Schemas$IssuingCardholderUpdateBodyBillingAddress,
} from "./issuing-cardholder-update-body-billing-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The cardholder's billing address.
 */
export type IssuingCardholderUpdateBodyBilling = {
  address: IssuingCardholderUpdateBodyBillingAddress;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyBilling without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyBilling = {
  address: External$IssuingCardholderUpdateBodyBillingAddress;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyBilling
 */
const SchemaIn$IssuingCardholderUpdateBodyBilling: z.ZodType<
  IssuingCardholderUpdateBodyBilling, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$IssuingCardholderUpdateBodyBillingAddress.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyBilling
 */
const SchemaOut$IssuingCardholderUpdateBodyBilling: z.ZodType<
  External$IssuingCardholderUpdateBodyBilling, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyBilling // the object to be transformed
> = z
  .object({
    address: Schemas$IssuingCardholderUpdateBodyBillingAddress.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$IssuingCardholderUpdateBodyBilling = {
  in: SchemaIn$IssuingCardholderUpdateBodyBilling,
  out: SchemaOut$IssuingCardholderUpdateBodyBilling,
};
