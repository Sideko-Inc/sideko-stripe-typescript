import {
  External$TreasuryReceivedCreditsResourceSourceFlowsDetails,
  Schemas$TreasuryReceivedCreditsResourceSourceFlowsDetails,
  TreasuryReceivedCreditsResourceSourceFlowsDetails,
} from "./treasury-received-credits-resource-source-flows-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedCreditsResourceLinkedFlows = {
  /**
   * The CreditReversal created as a result of this ReceivedCredit being reversed.
   */
  creditReversal?: string | null | undefined;
  /**
   * Set if the ReceivedCredit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
   */
  issuingAuthorization?: string | null | undefined;
  /**
   * Set if the ReceivedCredit is also viewable as an [Issuing transaction](https://stripe.com/docs/api#issuing_transactions) object.
   */
  issuingTransaction?: string | null | undefined;
  /**
   * ID of the source flow. Set if `network` is `stripe` and the source flow is visible to the user. Examples of source flows include OutboundPayments, payouts, or CreditReversals.
   */
  sourceFlow?: string | null | undefined;
  sourceFlowDetails?:
    | TreasuryReceivedCreditsResourceSourceFlowsDetails
    | undefined;
  /**
   * The type of flow that originated the ReceivedCredit (for example, `outbound_payment`).
   */
  sourceFlowType?: string | null | undefined;
};

/**
 * @internal
 * TreasuryReceivedCreditsResourceLinkedFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCreditsResourceLinkedFlows = {
  credit_reversal?: string | null | undefined;
  issuing_authorization?: string | null | undefined;
  issuing_transaction?: string | null | undefined;
  source_flow?: string | null | undefined;
  source_flow_details?:
    | External$TreasuryReceivedCreditsResourceSourceFlowsDetails
    | undefined;
  source_flow_type?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCreditsResourceLinkedFlows
 */
const SchemaIn$TreasuryReceivedCreditsResourceLinkedFlows: z.ZodType<
  TreasuryReceivedCreditsResourceLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credit_reversal: z.string().nullable().optional(),
    issuing_authorization: z.string().nullable().optional(),
    issuing_transaction: z.string().nullable().optional(),
    source_flow: z.string().nullable().optional(),
    source_flow_details: z.lazy(() =>
      Schemas$TreasuryReceivedCreditsResourceSourceFlowsDetails.in.optional(),
    ),
    source_flow_type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credit_reversal: "creditReversal",
      issuing_authorization: "issuingAuthorization",
      issuing_transaction: "issuingTransaction",
      source_flow: "sourceFlow",
      source_flow_details: "sourceFlowDetails",
      source_flow_type: "sourceFlowType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCreditsResourceLinkedFlows
 */
const SchemaOut$TreasuryReceivedCreditsResourceLinkedFlows: z.ZodType<
  External$TreasuryReceivedCreditsResourceLinkedFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCreditsResourceLinkedFlows // the object to be transformed
> = z
  .object({
    creditReversal: z.string().nullable().optional(),
    issuingAuthorization: z.string().nullable().optional(),
    issuingTransaction: z.string().nullable().optional(),
    sourceFlow: z.string().nullable().optional(),
    sourceFlowDetails: z.lazy(() =>
      Schemas$TreasuryReceivedCreditsResourceSourceFlowsDetails.out.optional(),
    ),
    sourceFlowType: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditReversal: "credit_reversal",
      issuingAuthorization: "issuing_authorization",
      issuingTransaction: "issuing_transaction",
      sourceFlow: "source_flow",
      sourceFlowDetails: "source_flow_details",
      sourceFlowType: "source_flow_type",
    });
  });

export const Schemas$TreasuryReceivedCreditsResourceLinkedFlows = {
  in: SchemaIn$TreasuryReceivedCreditsResourceLinkedFlows,
  out: SchemaOut$TreasuryReceivedCreditsResourceLinkedFlows,
};
