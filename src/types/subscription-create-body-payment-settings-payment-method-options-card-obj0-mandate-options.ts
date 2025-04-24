import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amountType?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amount_type?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  };
