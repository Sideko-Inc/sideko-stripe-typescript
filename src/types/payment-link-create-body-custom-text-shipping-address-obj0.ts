import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyCustomTextShippingAddressObj0
 */
export type PaymentLinkCreateBodyCustomTextShippingAddressObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomTextShippingAddressObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomTextShippingAddressObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomTextShippingAddressObj0
 */
const SchemaIn$PaymentLinkCreateBodyCustomTextShippingAddressObj0: z.ZodType<
  PaymentLinkCreateBodyCustomTextShippingAddressObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomTextShippingAddressObj0
 */
const SchemaOut$PaymentLinkCreateBodyCustomTextShippingAddressObj0: z.ZodType<
  External$PaymentLinkCreateBodyCustomTextShippingAddressObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomTextShippingAddressObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkCreateBodyCustomTextShippingAddressObj0 = {
  in: SchemaIn$PaymentLinkCreateBodyCustomTextShippingAddressObj0,
  out: SchemaOut$PaymentLinkCreateBodyCustomTextShippingAddressObj0,
};
