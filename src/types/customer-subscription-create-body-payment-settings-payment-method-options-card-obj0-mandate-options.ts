import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amountType?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amount_type?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    amount_type: z.enum(["fixed", "maximum"]).optional(),
    description: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_type: "amountType",
      description: "description",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    amountType: z.enum(["fixed", "maximum"]).optional(),
    description: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountType: "amount_type",
      description: "description",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  };
