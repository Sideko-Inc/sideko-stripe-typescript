import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
} from "./payment-intent-create-body-payment-method-options-card-obj0-three-d-secure-network-options-cartes-bancaires";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    cartesBancaires?:
      | PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    cartes_bancaires?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cartes_bancaires:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartes_bancaires: "cartesBancaires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions // the object to be transformed
> = z
  .object({
    cartesBancaires:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartesBancaires: "cartes_bancaires",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  };
