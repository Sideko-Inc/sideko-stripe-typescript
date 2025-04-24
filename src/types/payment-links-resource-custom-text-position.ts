import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomTextPosition = {
  /**
   * Text may be up to 1200 characters in length.
   */
  message: string;
};

/**
 * @internal
 * PaymentLinksResourceCustomTextPosition without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomTextPosition = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomTextPosition
 */
const SchemaIn$PaymentLinksResourceCustomTextPosition: z.ZodType<
  PaymentLinksResourceCustomTextPosition, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomTextPosition
 */
const SchemaOut$PaymentLinksResourceCustomTextPosition: z.ZodType<
  External$PaymentLinksResourceCustomTextPosition, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomTextPosition // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinksResourceCustomTextPosition = {
  in: SchemaIn$PaymentLinksResourceCustomTextPosition,
  out: SchemaOut$PaymentLinksResourceCustomTextPosition,
};
