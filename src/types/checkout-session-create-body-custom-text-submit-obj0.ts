import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomTextSubmitObj0
 */
export type CheckoutSessionCreateBodyCustomTextSubmitObj0 = {
  message: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomTextSubmitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomTextSubmitObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomTextSubmitObj0
 */
const SchemaIn$CheckoutSessionCreateBodyCustomTextSubmitObj0: z.ZodType<
  CheckoutSessionCreateBodyCustomTextSubmitObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomTextSubmitObj0
 */
const SchemaOut$CheckoutSessionCreateBodyCustomTextSubmitObj0: z.ZodType<
  External$CheckoutSessionCreateBodyCustomTextSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomTextSubmitObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomTextSubmitObj0 = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomTextSubmitObj0,
  out: SchemaOut$CheckoutSessionCreateBodyCustomTextSubmitObj0,
};
