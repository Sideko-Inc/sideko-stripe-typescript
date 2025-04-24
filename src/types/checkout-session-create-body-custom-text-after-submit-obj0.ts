import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomTextAfterSubmitObj0
 */
export type CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 = {
  message: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomTextAfterSubmitObj0
 */
const SchemaIn$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0: z.ZodType<
  CheckoutSessionCreateBodyCustomTextAfterSubmitObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0
 */
const SchemaOut$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0: z.ZodType<
  External$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0,
  out: SchemaOut$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0,
};
