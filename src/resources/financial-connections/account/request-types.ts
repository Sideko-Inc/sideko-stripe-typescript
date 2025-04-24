import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$FinancialConnectionsAccountDisconnectBody,
  FinancialConnectionsAccountDisconnectBody,
  Schemas$FinancialConnectionsAccountDisconnectBody,
} from "@sideko-inc/stripe/types/financial-connections-account-disconnect-body";
import {
  External$FinancialConnectionsAccountListAccountHolder,
  FinancialConnectionsAccountListAccountHolder,
  Schemas$FinancialConnectionsAccountListAccountHolder,
} from "@sideko-inc/stripe/types/financial-connections-account-list-account-holder";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
   */
  accountHolder?: FinancialConnectionsAccountListAccountHolder | undefined;
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
   * If present, only return accounts that were collected as part of the given session.
   */
  session?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  account_holder?:
    | External$FinancialConnectionsAccountListAccountHolder
    | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  session?: string | undefined;
  starting_after?: string | undefined;
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
    account_holder:
      Schemas$FinancialConnectionsAccountListAccountHolder.in.optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    session: z.string().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder: "accountHolder",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      session: "session",
      starting_after: "startingAfter",
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
    accountHolder:
      Schemas$FinancialConnectionsAccountListAccountHolder.out.optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    session: z.string().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolder: "account_holder",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      session: "session",
      startingAfter: "starting_after",
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
  account: string;
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
  account: string;
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
    account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
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
    account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * DisconnectRequest
 */
export type DisconnectRequest = {
  data?: FinancialConnectionsAccountDisconnectBody | undefined;
  account: string;
};

/**
 * @internal
 * DisconnectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisconnectRequest = {
  data?: External$FinancialConnectionsAccountDisconnectBody | undefined;
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisconnectRequest
 */
const SchemaIn$DisconnectRequest: z.ZodType<
  DisconnectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$FinancialConnectionsAccountDisconnectBody.in.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisconnectRequest
 */
const SchemaOut$DisconnectRequest: z.ZodType<
  External$DisconnectRequest, // output type of this zod object
  z.ZodTypeDef,
  DisconnectRequest // the object to be transformed
> = z
  .object({
    data: Schemas$FinancialConnectionsAccountDisconnectBody.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

export const Schemas$DisconnectRequest = {
  in: SchemaIn$DisconnectRequest,
  out: SchemaOut$DisconnectRequest,
};

/**
 * RefreshRequest
 */
export type RefreshRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The list of account features that you would like to refresh.
   */
  features: ("balance" | "ownership" | "transactions")[];
  account: string;
};

/**
 * @internal
 * RefreshRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefreshRequest = {
  expand?: string[] | undefined;
  features: ("balance" | "ownership" | "transactions")[];
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefreshRequest
 */
const SchemaIn$RefreshRequest: z.ZodType<
  RefreshRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["balance", "ownership", "transactions"])),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefreshRequest
 */
const SchemaOut$RefreshRequest: z.ZodType<
  External$RefreshRequest, // output type of this zod object
  z.ZodTypeDef,
  RefreshRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["balance", "ownership", "transactions"])),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      account: "account",
    });
  });

export const Schemas$RefreshRequest = {
  in: SchemaIn$RefreshRequest,
  out: SchemaOut$RefreshRequest,
};

/**
 * SubscribeRequest
 */
export type SubscribeRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The list of account features to which you would like to subscribe.
   */
  features: "transactions"[];
  account: string;
};

/**
 * @internal
 * SubscribeRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscribeRequest = {
  expand?: string[] | undefined;
  features: "transactions"[];
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscribeRequest
 */
const SchemaIn$SubscribeRequest: z.ZodType<
  SubscribeRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["transactions"])),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscribeRequest
 */
const SchemaOut$SubscribeRequest: z.ZodType<
  External$SubscribeRequest, // output type of this zod object
  z.ZodTypeDef,
  SubscribeRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["transactions"])),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      account: "account",
    });
  });

export const Schemas$SubscribeRequest = {
  in: SchemaIn$SubscribeRequest,
  out: SchemaOut$SubscribeRequest,
};

/**
 * UnsubscribeRequest
 */
export type UnsubscribeRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The list of account features from which you would like to unsubscribe.
   */
  features: "transactions"[];
  account: string;
};

/**
 * @internal
 * UnsubscribeRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UnsubscribeRequest = {
  expand?: string[] | undefined;
  features: "transactions"[];
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UnsubscribeRequest
 */
const SchemaIn$UnsubscribeRequest: z.ZodType<
  UnsubscribeRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["transactions"])),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UnsubscribeRequest
 */
const SchemaOut$UnsubscribeRequest: z.ZodType<
  External$UnsubscribeRequest, // output type of this zod object
  z.ZodTypeDef,
  UnsubscribeRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["transactions"])),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
      account: "account",
    });
  });

export const Schemas$UnsubscribeRequest = {
  in: SchemaIn$UnsubscribeRequest,
  out: SchemaOut$UnsubscribeRequest,
};
