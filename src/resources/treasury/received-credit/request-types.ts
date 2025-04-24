import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryReceivedCreditListLinkedFlows,
  Schemas$TreasuryReceivedCreditListLinkedFlows,
  TreasuryReceivedCreditListLinkedFlows,
} from "@sideko-inc/stripe/types/treasury-received-credit-list-linked-flows";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The FinancialAccount that received the funds.
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
   * Only return ReceivedCredits described by the flow.
   */
  linkedFlows?: TreasuryReceivedCreditListLinkedFlows | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return ReceivedCredits that have the given status: `succeeded` or `failed`.
   */
  status?: ("failed" | "succeeded") | undefined;
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
  linked_flows?: External$TreasuryReceivedCreditListLinkedFlows | undefined;
  starting_after?: string | undefined;
  status?: ("failed" | "succeeded") | undefined;
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
    linked_flows: Schemas$TreasuryReceivedCreditListLinkedFlows.in.optional(),
    starting_after: z.string().optional(),
    status: z.enum(["failed", "succeeded"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      linked_flows: "linkedFlows",
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
    linkedFlows: Schemas$TreasuryReceivedCreditListLinkedFlows.out.optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["failed", "succeeded"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      linkedFlows: "linked_flows",
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
