import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConfirmationTokensResourceShipping = {
  address: Address;
  /**
   * Recipient name.
   */
  name: string;
  /**
   * Recipient phone (including extension).
   */
  phone?: string | null | undefined;
};

/**
 * @internal
 * ConfirmationTokensResourceShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourceShipping = {
  address: External$Address;
  name: string;
  phone?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourceShipping
 */
const SchemaIn$ConfirmationTokensResourceShipping: z.ZodType<
  ConfirmationTokensResourceShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
    name: z.string(),
    phone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourceShipping
 */
const SchemaOut$ConfirmationTokensResourceShipping: z.ZodType<
  External$ConfirmationTokensResourceShipping, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourceShipping // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
    name: z.string(),
    phone: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$ConfirmationTokensResourceShipping = {
  in: SchemaIn$ConfirmationTokensResourceShipping,
  out: SchemaOut$ConfirmationTokensResourceShipping,
};
