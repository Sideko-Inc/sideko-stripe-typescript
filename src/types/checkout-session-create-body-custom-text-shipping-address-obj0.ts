import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyCustomTextShippingAddressObj0
 */
export type CheckoutSessionCreateBodyCustomTextShippingAddressObj0 = {
  message: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomTextShippingAddressObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomTextShippingAddressObj0 = {
  message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomTextShippingAddressObj0
 */
const SchemaIn$CheckoutSessionCreateBodyCustomTextShippingAddressObj0: z.ZodType<
  CheckoutSessionCreateBodyCustomTextShippingAddressObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomTextShippingAddressObj0
 */
const SchemaOut$CheckoutSessionCreateBodyCustomTextShippingAddressObj0: z.ZodType<
  External$CheckoutSessionCreateBodyCustomTextShippingAddressObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomTextShippingAddressObj0 // the object to be transformed
> = z
  .object({
    message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      message: "message",
    });
  });

export const Schemas$CheckoutSessionCreateBodyCustomTextShippingAddressObj0 = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomTextShippingAddressObj0,
  out: SchemaOut$CheckoutSessionCreateBodyCustomTextShippingAddressObj0,
};
