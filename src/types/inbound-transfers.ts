import {
  External$InboundTransfersPaymentMethodDetailsUsBankAccount,
  InboundTransfersPaymentMethodDetailsUsBankAccount,
  Schemas$InboundTransfersPaymentMethodDetailsUsBankAccount,
} from "./inbound-transfers-payment-method-details-us-bank-account";
import {
  External$TreasurySharedResourceBillingDetails,
  Schemas$TreasurySharedResourceBillingDetails,
  TreasurySharedResourceBillingDetails,
} from "./treasury-shared-resource-billing-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InboundTransfers = {
  billingDetails: TreasurySharedResourceBillingDetails;
  /**
   * The type of the payment method used in the InboundTransfer.
   */
  type: "us_bank_account";
  usBankAccount?: InboundTransfersPaymentMethodDetailsUsBankAccount | undefined;
};

/**
 * @internal
 * InboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InboundTransfers = {
  billing_details: External$TreasurySharedResourceBillingDetails;
  type: "us_bank_account";
  us_bank_account?:
    | External$InboundTransfersPaymentMethodDetailsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InboundTransfers
 */
const SchemaIn$InboundTransfers: z.ZodType<
  InboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_details: Schemas$TreasurySharedResourceBillingDetails.in,
    type: z.enum(["us_bank_account"]),
    us_bank_account: z.lazy(() =>
      Schemas$InboundTransfersPaymentMethodDetailsUsBankAccount.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_details: "billingDetails",
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InboundTransfers
 */
const SchemaOut$InboundTransfers: z.ZodType<
  External$InboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  InboundTransfers // the object to be transformed
> = z
  .object({
    billingDetails: Schemas$TreasurySharedResourceBillingDetails.out,
    type: z.enum(["us_bank_account"]),
    usBankAccount: z.lazy(() =>
      Schemas$InboundTransfersPaymentMethodDetailsUsBankAccount.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingDetails: "billing_details",
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$InboundTransfers = {
  in: SchemaIn$InboundTransfers,
  out: SchemaOut$InboundTransfers,
};
