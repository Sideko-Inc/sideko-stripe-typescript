import {
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
  Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
} from "./treasury-outbound-transfer-create-body-destination-payment-method-data";
import {
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
  Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
} from "./treasury-outbound-transfer-create-body-destination-payment-method-options";
import {
  External$TreasuryOutboundTransferCreateBodyMetadata,
  Schemas$TreasuryOutboundTransferCreateBodyMetadata,
  TreasuryOutboundTransferCreateBodyMetadata,
} from "./treasury-outbound-transfer-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundTransferCreateBody
 */
export type TreasuryOutboundTransferCreateBody = {
  /**
   * Amount (in cents) to be transferred.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * The PaymentMethod to use as the payment instrument for the OutboundTransfer.
   */
  destinationPaymentMethod?: string | undefined;
  /**
   * Hash used to generate the PaymentMethod to be used for this OutboundTransfer. Exclusive with `destination_payment_method`.
   */
  destinationPaymentMethodData?:
    | TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData
    | undefined;
  /**
   * Hash describing payment method configuration details.
   */
  destinationPaymentMethodOptions?:
    | TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The FinancialAccount to pull funds from.
   */
  financialAccount: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryOutboundTransferCreateBodyMetadata | undefined;
  /**
   * Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `us_domestic_wire` transfers. The default value is "transfer".
   */
  statementDescriptor?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string | undefined)
    | (
        | TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData
        | undefined
      )
    | (
        | TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions
        | undefined
      )
    | (string[] | undefined)
    | string
    | (TreasuryOutboundTransferCreateBodyMetadata | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryOutboundTransferCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransferCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  destination_payment_method?: string | undefined;
  destination_payment_method_data?:
    | External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData
    | undefined;
  destination_payment_method_options?:
    | External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions
    | undefined;
  expand?: string[] | undefined;
  financial_account: string;
  metadata?: External$TreasuryOutboundTransferCreateBodyMetadata | undefined;
  statement_descriptor?: string | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string | undefined)
    | (
        | External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData
        | undefined
      )
    | (
        | External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions
        | undefined
      )
    | (string[] | undefined)
    | string
    | (External$TreasuryOutboundTransferCreateBodyMetadata | undefined)
    | (string | undefined)
    | External$TreasuryOutboundTransferCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransferCreateBody
 */
const SchemaIn$TreasuryOutboundTransferCreateBody: z.ZodType<
  TreasuryOutboundTransferCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    destination_payment_method: z.string().optional(),
    destination_payment_method_data:
      Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData.in.optional(),
    destination_payment_method_options:
      Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions.in.optional(),
    expand: z.array(z.string()).optional(),
    financial_account: z.string(),
    metadata: Schemas$TreasuryOutboundTransferCreateBodyMetadata.in.optional(),
    statement_descriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination_payment_method: "destinationPaymentMethod",
      destination_payment_method_data: "destinationPaymentMethodData",
      destination_payment_method_options: "destinationPaymentMethodOptions",
      expand: "expand",
      financial_account: "financialAccount",
      metadata: "metadata",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransferCreateBody
 */
const SchemaOut$TreasuryOutboundTransferCreateBody: z.ZodType<
  External$TreasuryOutboundTransferCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransferCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    destinationPaymentMethod: z.string().optional(),
    destinationPaymentMethodData:
      Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData.out.optional(),
    destinationPaymentMethodOptions:
      Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions.out.optional(),
    expand: z.array(z.string()).optional(),
    financialAccount: z.string(),
    metadata: Schemas$TreasuryOutboundTransferCreateBodyMetadata.out.optional(),
    statementDescriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destinationPaymentMethod: "destination_payment_method",
      destinationPaymentMethodData: "destination_payment_method_data",
      destinationPaymentMethodOptions: "destination_payment_method_options",
      expand: "expand",
      financialAccount: "financial_account",
      metadata: "metadata",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$TreasuryOutboundTransferCreateBody = {
  in: SchemaIn$TreasuryOutboundTransferCreateBody,
  out: SchemaOut$TreasuryOutboundTransferCreateBody,
};
