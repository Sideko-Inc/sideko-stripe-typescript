import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  };
