import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires =
  {
    cbAvalgo: "0" | "1" | "2" | "3" | "4" | "A";
    cbExemption?: string | undefined;
    cbScore?: number | undefined;
  };

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires =
  {
    cb_avalgo: "0" | "1" | "2" | "3" | "4" | "A";
    cb_exemption?: string | undefined;
    cb_score?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cb_avalgo: z.enum(["0", "1", "2", "3", "4", "A"]),
    cb_exemption: z.string().optional(),
    cb_score: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cb_avalgo: "cbAvalgo",
      cb_exemption: "cbExemption",
      cb_score: "cbScore",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires // the object to be transformed
> = z
  .object({
    cbAvalgo: z.enum(["0", "1", "2", "3", "4", "A"]),
    cbExemption: z.string().optional(),
    cbScore: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cbAvalgo: "cb_avalgo",
      cbExemption: "cb_exemption",
      cbScore: "cb_score",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptionsCartesBancaires,
  };
