import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
} from "./payment-intent-update-body-payment-method-options-card-obj0-three-d-secure-network-options-cartes-bancaires";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    cartesBancaires?:
      | PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    cartes_bancaires?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cartes_bancaires:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartes_bancaires: "cartesBancaires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions // the object to be transformed
> = z
  .object({
    cartesBancaires:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartesBancaires: "cartes_bancaires",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  };
