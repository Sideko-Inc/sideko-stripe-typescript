import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires =
  {
    cbAvalgo: "0" | "1" | "2" | "3" | "4" | "A";
    cbExemption?: string | undefined;
    cbScore?: number | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires =
  {
    cb_avalgo: "0" | "1" | "2" | "3" | "4" | "A";
    cb_exemption?: string | undefined;
    cb_score?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  };
