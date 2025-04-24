import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions,
} from "./subscription-update-body-payment-settings-payment-method-options-acss-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandateOptions?:
      | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verificationMethod?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    mandate_options?:
      | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0MandateOptions.out.optional(),
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

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0 =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  };
