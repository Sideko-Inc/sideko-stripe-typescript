import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    referencePrefix?: (string | string) | undefined;
  };

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    reference_prefix?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions // the object to be transformed
> = z
  .object({
    referencePrefix: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      referencePrefix: "reference_prefix",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebitMandateOptions,
  };
