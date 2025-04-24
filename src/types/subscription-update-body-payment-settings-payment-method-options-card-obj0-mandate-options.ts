import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amountType?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amount_type?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions // the object to be transformed
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

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  };
