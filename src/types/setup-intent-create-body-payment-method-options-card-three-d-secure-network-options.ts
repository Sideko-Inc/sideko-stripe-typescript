import {
  External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
} from "./setup-intent-create-body-payment-method-options-card-three-d-secure-network-options-cartes-bancaires";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
export type SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    cartesBancaires?:
      | SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    cartes_bancaires?:
      | External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cartes_bancaires:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartes_bancaires: "cartesBancaires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions // the object to be transformed
> = z
  .object({
    cartesBancaires:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartesBancaires: "cartes_bancaires",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  };
