import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
} from "./setup-intent-confirm-body-payment-method-options-card-three-d-secure-network-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure = {
  aresTransStatus?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
  cryptogram?: string | undefined;
  electronicCommerceIndicator?: ("01" | "02" | "05" | "06" | "07") | undefined;
  networkOptions?:
    | SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
    | undefined;
  requestorChallengeIndicator?: string | undefined;
  transactionId?: string | undefined;
  version?: ("1.0.2" | "2.1.0" | "2.2.0") | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure =
  {
    ares_trans_status?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
    cryptogram?: string | undefined;
    electronic_commerce_indicator?:
      | ("01" | "02" | "05" | "06" | "07")
      | undefined;
    network_options?:
      | External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
      | undefined;
    requestor_challenge_indicator?: string | undefined;
    transaction_id?: string | undefined;
    version?: ("1.0.2" | "2.1.0" | "2.2.0") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ares_trans_status: z.enum(["A", "C", "I", "N", "R", "U", "Y"]).optional(),
    cryptogram: z.string().optional(),
    electronic_commerce_indicator: z
      .enum(["01", "02", "05", "06", "07"])
      .optional(),
    network_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions.in.optional(),
    requestor_challenge_indicator: z.string().optional(),
    transaction_id: z.string().optional(),
    version: z.enum(["1.0.2", "2.1.0", "2.2.0"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ares_trans_status: "aresTransStatus",
      cryptogram: "cryptogram",
      electronic_commerce_indicator: "electronicCommerceIndicator",
      network_options: "networkOptions",
      requestor_challenge_indicator: "requestorChallengeIndicator",
      transaction_id: "transactionId",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure // the object to be transformed
> = z
  .object({
    aresTransStatus: z.enum(["A", "C", "I", "N", "R", "U", "Y"]).optional(),
    cryptogram: z.string().optional(),
    electronicCommerceIndicator: z
      .enum(["01", "02", "05", "06", "07"])
      .optional(),
    networkOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions.out.optional(),
    requestorChallengeIndicator: z.string().optional(),
    transactionId: z.string().optional(),
    version: z.enum(["1.0.2", "2.1.0", "2.2.0"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aresTransStatus: "ares_trans_status",
      cryptogram: "cryptogram",
      electronicCommerceIndicator: "electronic_commerce_indicator",
      networkOptions: "network_options",
      requestorChallengeIndicator: "requestor_challenge_indicator",
      transactionId: "transaction_id",
      version: "version",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsCardThreeDSecure,
  };
