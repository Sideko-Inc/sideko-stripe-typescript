import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryOutboundTransferCancelBody,
  Schemas$TreasuryOutboundTransferCancelBody,
  TreasuryOutboundTransferCancelBody,
} from "@sideko-inc/stripe/types/treasury-outbound-transfer-cancel-body";
import {
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
  Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
} from "@sideko-inc/stripe/types/treasury-outbound-transfer-create-body-destination-payment-method-data";
import {
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
  Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptions,
} from "@sideko-inc/stripe/types/treasury-outbound-transfer-create-body-destination-payment-method-options";
import {
  External$TreasuryOutboundTransferCreateBodyMetadata,
  Schemas$TreasuryOutboundTransferCreateBodyMetadata,
  TreasuryOutboundTransferCreateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-outbound-transfer-create-body-metadata";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Returns objects associated with this FinancialAccount.
   */
  financialAccount: string;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`.
   */
  status?:
    | ("canceled" | "failed" | "posted" | "processing" | "returned")
    | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  financial_account: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?:
    | ("canceled" | "failed" | "posted" | "processing" | "returned")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_account: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["canceled", "failed", "posted", "processing", "returned"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    financialAccount: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["canceled", "failed", "posted", "processing", "returned"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  outboundTransfer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  outbound_transfer: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    outbound_transfer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      outbound_transfer: "outboundTransfer",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    outboundTransfer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      outboundTransfer: "outbound_transfer",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: TreasuryOutboundTransferCancelBody | undefined;
  outboundTransfer: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$TreasuryOutboundTransferCancelBody | undefined;
  outbound_transfer: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TreasuryOutboundTransferCancelBody.in.optional(),
    outbound_transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      outbound_transfer: "outboundTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TreasuryOutboundTransferCancelBody.out.optional(),
    outboundTransfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      outboundTransfer: "outbound_transfer",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};
