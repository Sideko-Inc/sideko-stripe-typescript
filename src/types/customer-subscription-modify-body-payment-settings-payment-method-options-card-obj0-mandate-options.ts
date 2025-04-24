import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amountType?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount?: number | undefined;
    amount_type?: ("fixed" | "maximum") | undefined;
    description?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0MandateOptions,
  };
