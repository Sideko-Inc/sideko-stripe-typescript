import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsSwish
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsSwish = {
  reference?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsSwish without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsSwish = {
  reference?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsSwish
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSwish: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsSwish, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsSwish
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSwish: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsSwish, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsSwish // the object to be transformed
> = z
  .object({
    reference: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSwish = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSwish,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSwish,
};
