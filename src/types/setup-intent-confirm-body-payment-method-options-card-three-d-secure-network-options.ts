import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
} from "./setup-intent-confirm-body-payment-method-options-card-three-d-secure-network-options-cartes-bancaires";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    cartesBancaires?:
      | SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    cartes_bancaires?:
      | External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cartes_bancaires:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartes_bancaires: "cartesBancaires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions // the object to be transformed
> = z
  .object({
    cartesBancaires:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartesBancaires: "cartes_bancaires",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  };
