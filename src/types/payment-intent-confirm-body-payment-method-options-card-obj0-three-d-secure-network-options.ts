import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
} from "./payment-intent-confirm-body-payment-method-options-card-obj0-three-d-secure-network-options-cartes-bancaires";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    cartesBancaires?:
      | PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    cartes_bancaires?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cartes_bancaires:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartes_bancaires: "cartesBancaires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions // the object to be transformed
> = z
  .object({
    cartesBancaires:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartesBancaires: "cartes_bancaires",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  };
