import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails,
} from "./treasury-outbound-payment-create-body-destination-payment-method-data-billing-details";
import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata,
} from "./treasury-outbound-payment-create-body-destination-payment-method-data-metadata";
import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount,
} from "./treasury-outbound-payment-create-body-destination-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.
 */
export type TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData = {
  billingDetails?:
    | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails
    | undefined;
  financialAccount?: string | undefined;
  metadata?:
    | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata
    | undefined;
  type: "financial_account" | "us_bank_account";
  usBankAccount?:
    | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount
    | undefined;
};

/**
 * @internal
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData =
  {
    billing_details?:
      | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails
      | undefined;
    financial_account?: string | undefined;
    metadata?:
      | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata
      | undefined;
    type: "financial_account" | "us_bank_account";
    us_bank_account?:
      | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData
 */
const SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData: z.ZodType<
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_details:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails.in.optional(),
    financial_account: z.string().optional(),
    metadata:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata.in.optional(),
    type: z.enum(["financial_account", "us_bank_account"]),
    us_bank_account:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_details: "billingDetails",
      financial_account: "financialAccount",
      metadata: "metadata",
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData
 */
const SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData: z.ZodType<
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData // the object to be transformed
> = z
  .object({
    billingDetails:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails.out.optional(),
    financialAccount: z.string().optional(),
    metadata:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata.out.optional(),
    type: z.enum(["financial_account", "us_bank_account"]),
    usBankAccount:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingDetails: "billing_details",
      financialAccount: "financial_account",
      metadata: "metadata",
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData =
  {
    in: SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
    out: SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
  };
