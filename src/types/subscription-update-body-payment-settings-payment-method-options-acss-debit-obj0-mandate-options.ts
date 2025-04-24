import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transactionType?: ("business" | "personal") | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionType: "transaction_type",
    });
  });

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  };
