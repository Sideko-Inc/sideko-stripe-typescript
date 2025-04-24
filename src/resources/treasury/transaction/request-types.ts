import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryTransactionListCreatedObj0,
  Schemas$TreasuryTransactionListCreatedObj0,
  TreasuryTransactionListCreatedObj0,
} from "@sideko-inc/stripe/types/treasury-transaction-list-created-obj0";
import {
  External$TreasuryTransactionListStatusTransitions,
  Schemas$TreasuryTransactionListStatusTransitions,
  TreasuryTransactionListStatusTransitions,
} from "@sideko-inc/stripe/types/treasury-transaction-list-status-transitions";
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
   * Only return Transactions that were created during the given date interval.
   */
  created?: (TreasuryTransactionListCreatedObj0 | number) | undefined;
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
   * The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.
   */
  orderBy?: ("created" | "posted_at") | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return Transactions that have the given status: `open`, `posted`, or `void`.
   */
  status?: ("open" | "posted" | "void") | undefined;
  /**
   * A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
   */
  statusTransitions?: TreasuryTransactionListStatusTransitions | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  financial_account: string;
  created?: (External$TreasuryTransactionListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  order_by?: ("created" | "posted_at") | undefined;
  starting_after?: string | undefined;
  status?: ("open" | "posted" | "void") | undefined;
  status_transitions?:
    | External$TreasuryTransactionListStatusTransitions
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
    created: z
      .union([Schemas$TreasuryTransactionListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    order_by: z.enum(["created", "posted_at"]).optional(),
    starting_after: z.string().optional(),
    status: z.enum(["open", "posted", "void"]).optional(),
    status_transitions:
      Schemas$TreasuryTransactionListStatusTransitions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      order_by: "orderBy",
      starting_after: "startingAfter",
      status: "status",
      status_transitions: "statusTransitions",
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
    created: z
      .union([Schemas$TreasuryTransactionListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    orderBy: z.enum(["created", "posted_at"]).optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["open", "posted", "void"]).optional(),
    statusTransitions:
      Schemas$TreasuryTransactionListStatusTransitions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      orderBy: "order_by",
      startingAfter: "starting_after",
      status: "status",
      statusTransitions: "status_transitions",
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
