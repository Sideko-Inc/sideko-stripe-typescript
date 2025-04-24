import {
  External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions,
} from "./setup-intent-create-body-payment-method-options-card-three-d-secure-network-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure
 */
export type SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure = {
  aresTransStatus?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
  cryptogram?: string | undefined;
  electronicCommerceIndicator?: ("01" | "02" | "05" | "06" | "07") | undefined;
  networkOptions?:
    | SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
    | undefined;
  requestorChallengeIndicator?: string | undefined;
  transactionId?: string | undefined;
  version?: ("1.0.2" | "2.1.0" | "2.2.0") | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure =
  {
    ares_trans_status?: ("A" | "C" | "I" | "N" | "R" | "U" | "Y") | undefined;
    cryptogram?: string | undefined;
    electronic_commerce_indicator?:
      | ("01" | "02" | "05" | "06" | "07")
      | undefined;
    network_options?:
      | External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions
      | undefined;
    requestor_challenge_indicator?: string | undefined;
    transaction_id?: string | undefined;
    version?: ("1.0.2" | "2.1.0" | "2.2.0") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure, // output type of this zod object
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
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure // the object to be transformed
> = z
  .object({
    aresTransStatus: z.enum(["A", "C", "I", "N", "R", "U", "Y"]).optional(),
    cryptogram: z.string().optional(),
    electronicCommerceIndicator: z
      .enum(["01", "02", "05", "06", "07"])
      .optional(),
    networkOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecureNetworkOptions.out.optional(),
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

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsCardThreeDSecure,
  };
