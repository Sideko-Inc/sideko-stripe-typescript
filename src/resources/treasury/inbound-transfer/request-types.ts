import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryInboundTransferCanceBody,
  Schemas$TreasuryInboundTransferCanceBody,
  TreasuryInboundTransferCanceBody,
} from "@sideko-inc/stripe/types/treasury-inbound-transfer-cance-body";
import {
  External$TreasuryInboundTransferCreateBodyMetadata,
  Schemas$TreasuryInboundTransferCreateBodyMetadata,
  TreasuryInboundTransferCreateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-inbound-transfer-create-body-metadata";
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
   * Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.
   */
  status?: ("canceled" | "failed" | "processing" | "succeeded") | undefined;
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
  status?: ("canceled" | "failed" | "processing" | "succeeded") | undefined;
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
      .enum(["canceled", "failed", "processing", "succeeded"])
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
      .enum(["canceled", "failed", "processing", "succeeded"])
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
  id: string;
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
  id: string;
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
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The FinancialAccount to send funds to.
   */
  financialAccount: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryInboundTransferCreateBodyMetadata | undefined;
  /**
   * The origin payment method to be debited for the InboundTransfer.
   */
  originPaymentMethod: string;
  /**
   * The complete description that appears on your customers' statements. Maximum 10 characters.
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
  expand?: string[] | undefined;
  financial_account: string;
  metadata?: External$TreasuryInboundTransferCreateBodyMetadata | undefined;
  origin_payment_method: string;
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
    expand: z.array(z.string()).optional(),
    financial_account: z.string(),
    metadata: Schemas$TreasuryInboundTransferCreateBodyMetadata.in.optional(),
    origin_payment_method: z.string(),
    statement_descriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      financial_account: "financialAccount",
      metadata: "metadata",
      origin_payment_method: "originPaymentMethod",
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
    expand: z.array(z.string()).optional(),
    financialAccount: z.string(),
    metadata: Schemas$TreasuryInboundTransferCreateBodyMetadata.out.optional(),
    originPaymentMethod: z.string(),
    statementDescriptor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      financialAccount: "financial_account",
      metadata: "metadata",
      originPaymentMethod: "origin_payment_method",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CanceRequest
 */
export type CanceRequest = {
  data?: TreasuryInboundTransferCanceBody | undefined;
  inboundTransfer: string;
};

/**
 * @internal
 * CanceRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CanceRequest = {
  data?: External$TreasuryInboundTransferCanceBody | undefined;
  inbound_transfer: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CanceRequest
 */
const SchemaIn$CanceRequest: z.ZodType<
  CanceRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TreasuryInboundTransferCanceBody.in.optional(),
    inbound_transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      inbound_transfer: "inboundTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CanceRequest
 */
const SchemaOut$CanceRequest: z.ZodType<
  External$CanceRequest, // output type of this zod object
  z.ZodTypeDef,
  CanceRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TreasuryInboundTransferCanceBody.out.optional(),
    inboundTransfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      inboundTransfer: "inbound_transfer",
    });
  });

export const Schemas$CanceRequest = {
  in: SchemaIn$CanceRequest,
  out: SchemaOut$CanceRequest,
};
