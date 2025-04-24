import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsPaypal
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsPaypal = {
  billingAgreementId?: string | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsPaypal = {
  billing_agreement_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsPaypal
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsPaypal: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsPaypal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsPaypal
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsPaypal: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsPaypal, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsPaypal // the object to be transformed
> = z
  .object({
    billingAgreementId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingAgreementId: "billing_agreement_id",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsPaypal = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsPaypal,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsPaypal,
};
