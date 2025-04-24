import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomTextSubmitObj0
 */
export type PaymentLinkUpdateBodyCustomTextSubmitObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomTextSubmitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomTextSubmitObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomTextSubmitObj0
 */
const SchemaIn$PaymentLinkUpdateBodyCustomTextSubmitObj0: z.ZodType<
  PaymentLinkUpdateBodyCustomTextSubmitObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomTextSubmitObj0
 */
const SchemaOut$PaymentLinkUpdateBodyCustomTextSubmitObj0: z.ZodType<
  External$PaymentLinkUpdateBodyCustomTextSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomTextSubmitObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkUpdateBodyCustomTextSubmitObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomTextSubmitObj0,
  out: SchemaOut$PaymentLinkUpdateBodyCustomTextSubmitObj0,
};
