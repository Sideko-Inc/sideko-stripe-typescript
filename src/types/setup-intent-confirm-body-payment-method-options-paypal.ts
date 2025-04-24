import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsPaypal
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsPaypal = {
  billingAgreementId?: string | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsPaypal = {
  billing_agreement_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsPaypal
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsPaypal: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsPaypal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_agreement_id: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_agreement_id: "billingAgreementId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsPaypal
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsPaypal: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsPaypal, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsPaypal // the object to be transformed
> = z
  .object({
    billingAgreementId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingAgreementId: "billing_agreement_id",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsPaypal = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsPaypal,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsPaypal,
};
