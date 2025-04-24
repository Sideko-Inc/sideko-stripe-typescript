import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  };
