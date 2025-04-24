import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The desired new PIN for this card.
 */
export type IssuingCardUpdateBodyPin = {
  encryptedNumber?: string | undefined;
};

/**
 * @internal
 * IssuingCardUpdateBodyPin without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardUpdateBodyPin = {
  encrypted_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardUpdateBodyPin
 */
const SchemaIn$IssuingCardUpdateBodyPin: z.ZodType<
  IssuingCardUpdateBodyPin, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    encrypted_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      encrypted_number: "encryptedNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardUpdateBodyPin
 */
const SchemaOut$IssuingCardUpdateBodyPin: z.ZodType<
  External$IssuingCardUpdateBodyPin, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardUpdateBodyPin // the object to be transformed
> = z
  .object({
    encryptedNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      encryptedNumber: "encrypted_number",
    });
  });

export const Schemas$IssuingCardUpdateBodyPin = {
  in: SchemaIn$IssuingCardUpdateBodyPin,
  out: SchemaOut$IssuingCardUpdateBodyPin,
};
