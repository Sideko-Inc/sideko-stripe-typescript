import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions = {
  referencePrefix?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  };
