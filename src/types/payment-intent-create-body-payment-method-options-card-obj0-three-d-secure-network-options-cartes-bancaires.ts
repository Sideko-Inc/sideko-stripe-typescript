import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires =
  {
    cbAvalgo: "0" | "1" | "2" | "3" | "4" | "A";
    cbExemption?: string | undefined;
    cbScore?: number | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires =
  {
    cb_avalgo: "0" | "1" | "2" | "3" | "4" | "A";
    cb_exemption?: string | undefined;
    cb_score?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptionsCartesBancaires,
  };
