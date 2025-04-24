import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transactionType?: ("business" | "personal") | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    transaction_type: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transaction_type: "transactionType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionType: "transaction_type",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  };
