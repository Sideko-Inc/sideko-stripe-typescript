import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderAddress = {
  address: Address;
};

/**
 * @internal
 * IssuingCardholderAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderAddress = {
  address: External$Address;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderAddress
 */
const SchemaIn$IssuingCardholderAddress: z.ZodType<
  IssuingCardholderAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderAddress
 */
const SchemaOut$IssuingCardholderAddress: z.ZodType<
  External$IssuingCardholderAddress, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderAddress // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$IssuingCardholderAddress = {
  in: SchemaIn$IssuingCardholderAddress,
  out: SchemaOut$IssuingCardholderAddress,
};
