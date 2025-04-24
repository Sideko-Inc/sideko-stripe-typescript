import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomTextAfterSubmitObj0
 */
export type PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomTextAfterSubmitObj0
 */
const SchemaIn$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0: z.ZodType<
  PaymentLinkUpdateBodyCustomTextAfterSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0
 */
const SchemaOut$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0: z.ZodType<
  External$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0,
  out: SchemaOut$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0,
};
