import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyCustomTextShippingAddressObj0
 */
export type PaymentLinkUpdateBodyCustomTextShippingAddressObj0 = {
  message: string;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomTextShippingAddressObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomTextShippingAddressObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomTextShippingAddressObj0
 */
const SchemaIn$PaymentLinkUpdateBodyCustomTextShippingAddressObj0: z.ZodType<
  PaymentLinkUpdateBodyCustomTextShippingAddressObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomTextShippingAddressObj0
 */
const SchemaOut$PaymentLinkUpdateBodyCustomTextShippingAddressObj0: z.ZodType<
  External$PaymentLinkUpdateBodyCustomTextShippingAddressObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomTextShippingAddressObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$PaymentLinkUpdateBodyCustomTextShippingAddressObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomTextShippingAddressObj0,
  out: SchemaOut$PaymentLinkUpdateBodyCustomTextShippingAddressObj0,
};
