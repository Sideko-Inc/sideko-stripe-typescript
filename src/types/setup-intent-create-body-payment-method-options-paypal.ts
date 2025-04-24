import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsPaypal
 */
export type SetupIntentCreateBodyPaymentMethodOptionsPaypal = {
  billingAgreementId?: string | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsPaypal = {
  billing_agreement_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsPaypal
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsPaypal: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsPaypal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsPaypal
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsPaypal: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsPaypal, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsPaypal // the object to be transformed
> = z
  .object({
    billingAgreementId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingAgreementId: "billing_agreement_id",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsPaypal = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsPaypal,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsPaypal,
};
