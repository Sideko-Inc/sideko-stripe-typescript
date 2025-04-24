import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomTextSubmitObj0
 */
export type PaymentLinkCreateBodyCustomTextSubmitObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomTextSubmitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomTextSubmitObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomTextSubmitObj0
 */
const SchemaIn$PaymentLinkCreateBodyCustomTextSubmitObj0: z.ZodType<
  PaymentLinkCreateBodyCustomTextSubmitObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomTextSubmitObj0
 */
const SchemaOut$PaymentLinkCreateBodyCustomTextSubmitObj0: z.ZodType<
  External$PaymentLinkCreateBodyCustomTextSubmitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomTextSubmitObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkCreateBodyCustomTextSubmitObj0 = {
  in: SchemaIn$PaymentLinkCreateBodyCustomTextSubmitObj0,
  out: SchemaOut$PaymentLinkCreateBodyCustomTextSubmitObj0,
};
