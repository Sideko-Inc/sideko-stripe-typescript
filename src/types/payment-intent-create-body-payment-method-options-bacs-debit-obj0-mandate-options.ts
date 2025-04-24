import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  };
