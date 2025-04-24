import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomTextPosition = {
  /**
   * Text may be up to 1200 characters in length.
   */
  message: string;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomTextPosition without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomTextPosition = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomTextPosition
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomTextPosition: z.ZodType<
  PaymentPagesCheckoutSessionCustomTextPosition, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomTextPosition
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomTextPosition: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomTextPosition, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomTextPosition // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomTextPosition = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomTextPosition,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomTextPosition,
};
