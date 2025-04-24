import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
} from "./setup-intent-update-body-payment-method-options-card-three-d-secure-network-options-cartes-bancaires";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    cartesBancaires?:
      | SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    cartes_bancaires?:
      | External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cartes_bancaires:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartes_bancaires: "cartesBancaires",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions // the object to be transformed
> = z
  .object({
    cartesBancaires:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cartesBancaires: "cartes_bancaires",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  };
