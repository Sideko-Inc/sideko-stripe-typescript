import {
  External$SourceUpdateBodyMandate,
  Schemas$SourceUpdateBodyMandate,
  SourceUpdateBodyMandate,
} from "./source-update-body-mandate";
import {
  External$SourceUpdateBodyMetadataObj0,
  Schemas$SourceUpdateBodyMetadataObj0,
  SourceUpdateBodyMetadataObj0,
} from "./source-update-body-metadata-obj0";
import {
  External$SourceUpdateBodyOwner,
  Schemas$SourceUpdateBodyOwner,
  SourceUpdateBodyOwner,
} from "./source-update-body-owner";
import {
  External$SourceUpdateBodySourceOrder,
  Schemas$SourceUpdateBodySourceOrder,
  SourceUpdateBodySourceOrder,
} from "./source-update-body-source-order";
import { types } from "@sideko-inc/stripe";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceUpdateBody
 */
export type SourceUpdateBody = {
  /**
   * Amount associated with the source.
   */
  amount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
   */
  mandate?: SourceUpdateBodyMandate | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SourceUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: SourceUpdateBodyOwner | undefined;
  /**
   * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
   */
  sourceOrder?: SourceUpdateBodySourceOrder | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string[] | undefined)
    | (SourceUpdateBodyMandate | undefined)
    | ((SourceUpdateBodyMetadataObj0 | string) | undefined)
    | (SourceUpdateBodyOwner | undefined)
    | (SourceUpdateBodySourceOrder | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SourceUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBody = {
  amount?: number | undefined;
  expand?: string[] | undefined;
  mandate?: External$SourceUpdateBodyMandate | undefined;
  metadata?: (External$SourceUpdateBodyMetadataObj0 | string) | undefined;
  owner?: External$SourceUpdateBodyOwner | undefined;
  source_order?: External$SourceUpdateBodySourceOrder | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string[] | undefined)
    | (External$SourceUpdateBodyMandate | undefined)
    | ((External$SourceUpdateBodyMetadataObj0 | string) | undefined)
    | (External$SourceUpdateBodyOwner | undefined)
    | (External$SourceUpdateBodySourceOrder | undefined)
    | External$SourceUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBody
 */
const SchemaIn$SourceUpdateBody: z.ZodType<
  SourceUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    mandate: Schemas$SourceUpdateBodyMandate.in.optional(),
    metadata: z
      .union([Schemas$SourceUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    owner: Schemas$SourceUpdateBodyOwner.in.optional(),
    source_order: Schemas$SourceUpdateBodySourceOrder.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      mandate: "mandate",
      metadata: "metadata",
      owner: "owner",
      source_order: "sourceOrder",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBody
 */
const SchemaOut$SourceUpdateBody: z.ZodType<
  External$SourceUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    mandate: Schemas$SourceUpdateBodyMandate.out.optional(),
    metadata: z
      .union([Schemas$SourceUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    owner: Schemas$SourceUpdateBodyOwner.out.optional(),
    sourceOrder: Schemas$SourceUpdateBodySourceOrder.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      expand: "expand",
      mandate: "mandate",
      metadata: "metadata",
      owner: "owner",
      sourceOrder: "source_order",
    });
  });

export const Schemas$SourceUpdateBody = {
  in: SchemaIn$SourceUpdateBody,
  out: SchemaOut$SourceUpdateBody,
};
