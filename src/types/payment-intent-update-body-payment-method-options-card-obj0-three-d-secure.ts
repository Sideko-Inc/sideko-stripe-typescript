import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
} from "./payment-intent-update-body-payment-method-options-card-obj0-three-d-secure-network-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure = {
  aresTransStatus?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
  cryptogram: string;
  electronicCommerceIndicator?: ("01" | "02" | "05" | "06" | "07") | undefined;
  exemptionIndicator?: ("low_risk" | "none") | undefined;
  networkOptions?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
    | undefined;
  requestorChallengeIndicator?: string | undefined;
  transactionId: string;
  version: "1.0.2" | "2.1.0" | "2.2.0";
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure =
  {
    ares_trans_status?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
    cryptogram: string;
    electronic_commerce_indicator?:
      | ("01" | "02" | "05" | "06" | "07")
      | undefined;
    exemption_indicator?: ("low_risk" | "none") | undefined;
    network_options?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
      | undefined;
    requestor_challenge_indicator?: string | undefined;
    transaction_id: string;
    version: "1.0.2" | "2.1.0" | "2.2.0";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ares_trans_status: z.enum(["A", "C", "I", "N", "R", "U", "Y"]).optional(),
    cryptogram: z.string(),
    electronic_commerce_indicator: z
      .enum(["01", "02", "05", "06", "07"])
      .optional(),
    exemption_indicator: z.enum(["low_risk", "none"]).optional(),
    network_options:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions.in.optional(),
    requestor_challenge_indicator: z.string().optional(),
    transaction_id: z.string(),
    version: z.enum(["1.0.2", "2.1.0", "2.2.0"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ares_trans_status: "aresTransStatus",
      cryptogram: "cryptogram",
      electronic_commerce_indicator: "electronicCommerceIndicator",
      exemption_indicator: "exemptionIndicator",
      network_options: "networkOptions",
      requestor_challenge_indicator: "requestorChallengeIndicator",
      transaction_id: "transactionId",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure // the object to be transformed
> = z
  .object({
    aresTransStatus: z.enum(["A", "C", "I", "N", "R", "U", "Y"]).optional(),
    cryptogram: z.string(),
    electronicCommerceIndicator: z
      .enum(["01", "02", "05", "06", "07"])
      .optional(),
    exemptionIndicator: z.enum(["low_risk", "none"]).optional(),
    networkOptions:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions.out.optional(),
    requestorChallengeIndicator: z.string().optional(),
    transactionId: z.string(),
    version: z.enum(["1.0.2", "2.1.0", "2.2.0"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aresTransStatus: "ares_trans_status",
      cryptogram: "cryptogram",
      electronicCommerceIndicator: "electronic_commerce_indicator",
      exemptionIndicator: "exemption_indicator",
      networkOptions: "network_options",
      requestorChallengeIndicator: "requestor_challenge_indicator",
      transactionId: "transaction_id",
      version: "version",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardObj0ThreeDSecure,
  };
