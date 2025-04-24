import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  };
