import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transactionType?: ("business" | "personal") | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transactionType: "transaction_type",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  };
