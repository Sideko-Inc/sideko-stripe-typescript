import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments = {
  enabled?: boolean | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments =
  {
    enabled?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCardInstallments,
  };
