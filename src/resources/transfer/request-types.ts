import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TransferCreateBodyMetadata,
  Schemas$TransferCreateBodyMetadata,
  TransferCreateBodyMetadata,
} from "@sideko-inc/stripe/types/transfer-create-body-metadata";
import {
  External$TransferListCreatedObj0,
  Schemas$TransferListCreatedObj0,
  TransferListCreatedObj0,
} from "@sideko-inc/stripe/types/transfer-list-created-obj0";
import {
  External$TransferUpdateBody,
  Schemas$TransferUpdateBody,
  TransferUpdateBody,
} from "@sideko-inc/stripe/types/transfer-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return transfers that were created during the given date interval.
   */
  created?: (TransferListCreatedObj0 | number) | undefined;
  /**
   * Only return transfers for the destination specified by this account ID.
   */
  destination?: string | undefined;
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
   * Only return transfers with the specified transfer group.
   */
  transferGroup?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$TransferListCreatedObj0 | number) | undefined;
  destination?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  transfer_group?: string | undefined;
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
    created: z
      .union([Schemas$TransferListCreatedObj0.in, z.number().int()])
      .optional(),
    destination: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      destination: "destination",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      transfer_group: "transferGroup",
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
    created: z
      .union([Schemas$TransferListCreatedObj0.out, z.number().int()])
      .optional(),
    destination: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      destination: "destination",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      transferGroup: "transfer_group",
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
  transfer: string;
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
  transfer: string;
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
    transfer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transfer: "transfer",
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
    transfer: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transfer: "transfer",
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
   * A positive integer in cents (or local equivalent) representing how much to transfer.
   */
  amount?: number | undefined;
  /**
   * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * The ID of a connected Stripe account. <a href="/docs/connect/separate-charges-and-transfers">See the Connect documentation</a> for details.
   */
  destination: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TransferCreateBodyMetadata | undefined;
  /**
   * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-availability) for details.
   */
  sourceTransaction?: string | undefined;
  /**
   * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
   */
  sourceType?: ("bank_account" | "card" | "fpx") | undefined;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount?: number | undefined;
  currency: string;
  description?: string | undefined;
  destination: string;
  expand?: string[] | undefined;
  metadata?: External$TransferCreateBodyMetadata | undefined;
  source_transaction?: string | undefined;
  source_type?: ("bank_account" | "card" | "fpx") | undefined;
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
    amount: z.number().int().optional(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TransferCreateBodyMetadata.in.optional(),
    source_transaction: z.string().optional(),
    source_type: z.enum(["bank_account", "card", "fpx"]).optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      source_transaction: "sourceTransaction",
      source_type: "sourceType",
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
    amount: z.number().int().optional(),
    currency: z.string(),
    description: z.string().optional(),
    destination: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TransferCreateBodyMetadata.out.optional(),
    sourceTransaction: z.string().optional(),
    sourceType: z.enum(["bank_account", "card", "fpx"]).optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      sourceTransaction: "source_transaction",
      sourceType: "source_type",
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
  data?: TransferUpdateBody | undefined;
  transfer: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$TransferUpdateBody | undefined;
  transfer: string;
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
    data: Schemas$TransferUpdateBody.in.optional(),
    transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      transfer: "transfer",
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
    data: Schemas$TransferUpdateBody.out.optional(),
    transfer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      transfer: "transfer",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
