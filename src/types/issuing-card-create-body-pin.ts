import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The desired PIN for this card.
 */
export type IssuingCardCreateBodyPin = {
  encryptedNumber?: string | undefined;
};

/**
 * @internal
 * IssuingCardCreateBodyPin without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardCreateBodyPin = {
  encrypted_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardCreateBodyPin
 */
const SchemaIn$IssuingCardCreateBodyPin: z.ZodType<
  IssuingCardCreateBodyPin, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardCreateBodyPin
 */
const SchemaOut$IssuingCardCreateBodyPin: z.ZodType<
  External$IssuingCardCreateBodyPin, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardCreateBodyPin // the object to be transformed
> = z
  .object({
    encryptedNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      encryptedNumber: "encrypted_number",
    });
  });

export const Schemas$IssuingCardCreateBodyPin = {
  in: SchemaIn$IssuingCardCreateBodyPin,
  out: SchemaOut$IssuingCardCreateBodyPin,
};
