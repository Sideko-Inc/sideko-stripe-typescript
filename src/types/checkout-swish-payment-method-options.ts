import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutSwishPaymentMethodOptions = {
  /**
   * The order reference that will be displayed to customers in the Swish application. Defaults to the `id` of the Payment Intent.
   */
  reference?: string | null | undefined;
};

/**
 * @internal
 * CheckoutSwishPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSwishPaymentMethodOptions = {
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSwishPaymentMethodOptions
 */
const SchemaIn$CheckoutSwishPaymentMethodOptions: z.ZodType<
  CheckoutSwishPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSwishPaymentMethodOptions
 */
const SchemaOut$CheckoutSwishPaymentMethodOptions: z.ZodType<
  External$CheckoutSwishPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSwishPaymentMethodOptions // the object to be transformed
> = z
  .object({
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

export const Schemas$CheckoutSwishPaymentMethodOptions = {
  in: SchemaIn$CheckoutSwishPaymentMethodOptions,
  out: SchemaOut$CheckoutSwishPaymentMethodOptions,
};
