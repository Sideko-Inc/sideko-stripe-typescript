import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsAlma = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsAlma without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsAlma = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsAlma
 */
const SchemaIn$PaymentMethodOptionsAlma: z.ZodType<
  PaymentMethodOptionsAlma, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsAlma
 */
const SchemaOut$PaymentMethodOptionsAlma: z.ZodType<
  External$PaymentMethodOptionsAlma, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsAlma // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentMethodOptionsAlma = {
  in: SchemaIn$PaymentMethodOptionsAlma,
  out: SchemaOut$PaymentMethodOptionsAlma,
};
