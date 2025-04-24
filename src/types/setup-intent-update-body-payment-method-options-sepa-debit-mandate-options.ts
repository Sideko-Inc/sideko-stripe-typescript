import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions = {
  referencePrefix?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  };
