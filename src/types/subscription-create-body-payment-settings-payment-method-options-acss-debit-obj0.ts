import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
} from "./subscription-create-body-payment-settings-payment-method-options-acss-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandateOptions?:
      | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandate_options?:
      | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.out.optional(),
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

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  };
