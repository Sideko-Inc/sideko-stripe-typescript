import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  };
