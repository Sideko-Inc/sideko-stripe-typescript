import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebitMandateOptions,
  };
