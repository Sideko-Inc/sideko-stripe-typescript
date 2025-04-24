import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-acss-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandateOptions?:
      | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandate_options?:
      | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.in.optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.out.optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  };
