import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference_prefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference_prefix: "referencePrefix",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  };
