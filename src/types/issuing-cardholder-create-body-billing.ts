import {
  External$IssuingCardholderCreateBodyBillingAddress,
  IssuingCardholderCreateBodyBillingAddress,
  Schemas$IssuingCardholderCreateBodyBillingAddress,
} from "./issuing-cardholder-create-body-billing-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The cardholder's billing address.
 */
export type IssuingCardholderCreateBodyBilling = {
  address: IssuingCardholderCreateBodyBillingAddress;
};

/**
 * @internal
 * IssuingCardholderCreateBodyBilling without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyBilling = {
  address: External$IssuingCardholderCreateBodyBillingAddress;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyBilling
 */
const SchemaIn$IssuingCardholderCreateBodyBilling: z.ZodType<
  IssuingCardholderCreateBodyBilling, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$IssuingCardholderCreateBodyBillingAddress.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyBilling
 */
const SchemaOut$IssuingCardholderCreateBodyBilling: z.ZodType<
  External$IssuingCardholderCreateBodyBilling, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyBilling // the object to be transformed
> = z
  .object({
    address: Schemas$IssuingCardholderCreateBodyBillingAddress.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$IssuingCardholderCreateBodyBilling = {
  in: SchemaIn$IssuingCardholderCreateBodyBilling,
  out: SchemaOut$IssuingCardholderCreateBodyBilling,
};
