import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryDebitReversalCreateBodyMetadata,
  Schemas$TreasuryDebitReversalCreateBodyMetadata,
  TreasuryDebitReversalCreateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-debit-reversal-create-body-metadata";
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
   * Only return DebitReversals for the ReceivedDebit ID.
   */
  receivedDebit?: string | undefined;
  /**
   * Only return DebitReversals for a given resolution.
   */
  resolution?: ("lost" | "won") | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return DebitReversals for a given status.
   */
  status?: ("canceled" | "completed" | "processing") | undefined;
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
  received_debit?: string | undefined;
  resolution?: ("lost" | "won") | undefined;
  starting_after?: string | undefined;
  status?: ("canceled" | "completed" | "processing") | undefined;
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
    received_debit: z.string().optional(),
    resolution: z.enum(["lost", "won"]).optional(),
    starting_after: z.string().optional(),
    status: z.enum(["canceled", "completed", "processing"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      received_debit: "receivedDebit",
      resolution: "resolution",
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
    receivedDebit: z.string().optional(),
    resolution: z.enum(["lost", "won"]).optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["canceled", "completed", "processing"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      receivedDebit: "received_debit",
      resolution: "resolution",
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
  debitReversal: string;
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
  debit_reversal: string;
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
    debit_reversal: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debit_reversal: "debitReversal",
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
    debitReversal: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      debitReversal: "debit_reversal",
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryDebitReversalCreateBodyMetadata | undefined;
  /**
   * The ReceivedDebit to reverse.
   */
  receivedDebit: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  metadata?: External$TreasuryDebitReversalCreateBodyMetadata | undefined;
  received_debit: string;
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
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TreasuryDebitReversalCreateBodyMetadata.in.optional(),
    received_debit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      received_debit: "receivedDebit",
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
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TreasuryDebitReversalCreateBodyMetadata.out.optional(),
    receivedDebit: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      receivedDebit: "received_debit",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
