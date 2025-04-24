import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
export type SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions = {
  referencePrefix?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  };
