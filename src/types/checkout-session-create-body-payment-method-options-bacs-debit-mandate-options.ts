import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  };
