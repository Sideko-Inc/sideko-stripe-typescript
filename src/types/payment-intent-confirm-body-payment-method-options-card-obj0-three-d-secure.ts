import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions,
} from "./payment-intent-confirm-body-payment-method-options-card-obj0-three-d-secure-network-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure = {
  aresTransStatus?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
  cryptogram: string;
  electronicCommerceIndicator?: ("01" | "02" | "05" | "06" | "07") | undefined;
  exemptionIndicator?: ("low_risk" | "none") | undefined;
  networkOptions?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
    | undefined;
  requestorChallengeIndicator?: string | undefined;
  transactionId: string;
  version: "1.0.2" | "2.1.0" | "2.2.0";
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure =
  {
    ares_trans_status?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
    cryptogram: string;
    electronic_commerce_indicator?:
      | ("01" | "02" | "05" | "06" | "07")
      | undefined;
    exemption_indicator?: ("low_risk" | "none") | undefined;
    network_options?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions
      | undefined;
    requestor_challenge_indicator?: string | undefined;
    transaction_id: string;
    version: "1.0.2" | "2.1.0" | "2.2.0";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure, // output type of this zod object
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
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure // the object to be transformed
> = z
  .object({
    aresTransStatus: z.enum(["A", "C", "I", "N", "R", "U", "Y"]).optional(),
    cryptogram: z.string(),
    electronicCommerceIndicator: z
      .enum(["01", "02", "05", "06", "07"])
      .optional(),
    exemptionIndicator: z.enum(["low_risk", "none"]).optional(),
    networkOptions:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecureNetworkOptions.out.optional(),
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardObj0ThreeDSecure,
  };
