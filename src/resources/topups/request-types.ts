import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TopupsCancelBody,
  Schemas$TopupsCancelBody,
  TopupsCancelBody,
} from "@sideko-inc/stripe/types/topups-cancel-body";
import {
  External$TopupsCreateBodyMetadataObj0,
  Schemas$TopupsCreateBodyMetadataObj0,
  TopupsCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/topups-create-body-metadata-obj0";
import {
  External$TopupsListAmountObj0,
  Schemas$TopupsListAmountObj0,
  TopupsListAmountObj0,
} from "@sideko-inc/stripe/types/topups-list-amount-obj0";
import {
  External$TopupsListCreatedObj0,
  Schemas$TopupsListCreatedObj0,
  TopupsListCreatedObj0,
} from "@sideko-inc/stripe/types/topups-list-created-obj0";
import {
  External$TopupsUpdateBody,
  Schemas$TopupsUpdateBody,
  TopupsUpdateBody,
} from "@sideko-inc/stripe/types/topups-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * A positive integer representing how much to transfer.
   */
  amount?: (TopupsListAmountObj0 | number) | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (TopupsListCreatedObj0 | number) | undefined;
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
   * Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
   */
  status?: ("canceled" | "failed" | "pending" | "succeeded") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  amount?: (External$TopupsListAmountObj0 | number) | undefined;
  created?: (External$TopupsListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("canceled" | "failed" | "pending" | "succeeded") | undefined;
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
    amount: z
      .union([Schemas$TopupsListAmountObj0.in, z.number().int()])
      .optional(),
    created: z
      .union([Schemas$TopupsListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["canceled", "failed", "pending", "succeeded"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      created: "created",
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
    amount: z
      .union([Schemas$TopupsListAmountObj0.out, z.number().int()])
      .optional(),
    created: z
      .union([Schemas$TopupsListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["canceled", "failed", "pending", "succeeded"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      created: "created",
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
  topup: string;
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
  topup: string;
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
    topup: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      topup: "topup",
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
    topup: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      topup: "topup",
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
   * A positive integer representing how much to transfer.
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TopupsCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The ID of a source to transfer funds from. For most users, this should be left unspecified which will use the bank account that was set up in the dashboard for the specified currency. In test mode, this can be a test bank token (see [Testing Top-ups](https://stripe.com/docs/connect/testing#testing-top-ups)).
   */
  source?: string | undefined;
  /**
   * Extra information about a top-up for the source's bank statement. Limited to 15 ASCII characters.
   */
  statementDescriptor?: string | undefined;
  /**
   * A string that identifies this top-up as part of a group.
   */
  transferGroup?: string | undefined;
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
  metadata?: (External$TopupsCreateBodyMetadataObj0 | string) | undefined;
  source?: string | undefined;
  statement_descriptor?: string | undefined;
  transfer_group?: string | undefined;
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
    metadata: z
      .union([Schemas$TopupsCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    source: z.string().optional(),
    statement_descriptor: z.string().optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      source: "source",
      statement_descriptor: "statementDescriptor",
      transfer_group: "transferGroup",
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
    metadata: z
      .union([Schemas$TopupsCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    source: z.string().optional(),
    statementDescriptor: z.string().optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      source: "source",
      statementDescriptor: "statement_descriptor",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: TopupsUpdateBody | undefined;
  topup: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$TopupsUpdateBody | undefined;
  topup: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TopupsUpdateBody.in.optional(),
    topup: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      topup: "topup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TopupsUpdateBody.out.optional(),
    topup: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      topup: "topup",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: TopupsCancelBody | undefined;
  topup: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$TopupsCancelBody | undefined;
  topup: string;
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
    data: Schemas$TopupsCancelBody.in.optional(),
    topup: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      topup: "topup",
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
    data: Schemas$TopupsCancelBody.out.optional(),
    topup: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      topup: "topup",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};
