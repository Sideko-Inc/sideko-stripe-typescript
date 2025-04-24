import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
export type SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions = {
  referencePrefix?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  };
