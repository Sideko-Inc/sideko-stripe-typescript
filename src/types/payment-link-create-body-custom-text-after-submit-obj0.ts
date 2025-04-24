import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomTextAfterSubmitObj0
 */
export type PaymentLinkCreateBodyCustomTextAfterSubmitObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomTextAfterSubmitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomTextAfterSubmitObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomTextAfterSubmitObj0
 */
const SchemaIn$PaymentLinkCreateBodyCustomTextAfterSubmitObj0: z.ZodType<
  PaymentLinkCreateBodyCustomTextAfterSubmitObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomTextAfterSubmitObj0
 */
const SchemaOut$PaymentLinkCreateBodyCustomTextAfterSubmitObj0: z.ZodType<
  External$PaymentLinkCreateBodyCustomTextAfterSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomTextAfterSubmitObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkCreateBodyCustomTextAfterSubmitObj0 = {
  in: SchemaIn$PaymentLinkCreateBodyCustomTextAfterSubmitObj0,
  out: SchemaOut$PaymentLinkCreateBodyCustomTextAfterSubmitObj0,
};
