import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptionsPaypal1 = {
  /**
   * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
   */
  billingAgreementId?: string | null | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptionsPaypal1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptionsPaypal1 = {
  billing_agreement_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptionsPaypal1
 */
const SchemaIn$SetupIntentPaymentMethodOptionsPaypal1: z.ZodType<
  SetupIntentPaymentMethodOptionsPaypal1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_agreement_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_agreement_id: "billingAgreementId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptionsPaypal1
 */
const SchemaOut$SetupIntentPaymentMethodOptionsPaypal1: z.ZodType<
  External$SetupIntentPaymentMethodOptionsPaypal1, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptionsPaypal1 // the object to be transformed
> = z
  .object({
    billingAgreementId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingAgreementId: "billing_agreement_id",
    });
  });

export const Schemas$SetupIntentPaymentMethodOptionsPaypal1 = {
  in: SchemaIn$SetupIntentPaymentMethodOptionsPaypal1,
  out: SchemaOut$SetupIntentPaymentMethodOptionsPaypal1,
};
