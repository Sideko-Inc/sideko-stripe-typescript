import {
  External$TopupsCreateBodyMetadataObj0,
  Schemas$TopupsCreateBodyMetadataObj0,
  TopupsCreateBodyMetadataObj0,
} from "./topups-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TopupsCreateBody
 */
export type TopupsCreateBody = {
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

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | ((TopupsCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TopupsCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TopupsCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?: (External$TopupsCreateBodyMetadataObj0 | string) | undefined;
  source?: string | undefined;
  statement_descriptor?: string | undefined;
  transfer_group?: string | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | ((External$TopupsCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | External$TopupsCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TopupsCreateBody
 */
const SchemaIn$TopupsCreateBody: z.ZodType<
  TopupsCreateBody, // output type of this zod object
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
  .catchall(zodRequiredAny)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TopupsCreateBody
 */
const SchemaOut$TopupsCreateBody: z.ZodType<
  External$TopupsCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TopupsCreateBody // the object to be transformed
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
  .catchall(zodRequiredAny)
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

export const Schemas$TopupsCreateBody = {
  in: SchemaIn$TopupsCreateBody,
  out: SchemaOut$TopupsCreateBody,
};
