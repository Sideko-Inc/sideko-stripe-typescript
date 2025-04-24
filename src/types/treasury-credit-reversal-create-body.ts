import {
  External$TreasuryCreditReversalCreateBodyMetadata,
  Schemas$TreasuryCreditReversalCreateBodyMetadata,
  TreasuryCreditReversalCreateBodyMetadata,
} from "./treasury-credit-reversal-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryCreditReversalCreateBody
 */
export type TreasuryCreditReversalCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryCreditReversalCreateBodyMetadata | undefined;
  /**
   * The ReceivedCredit to reverse.
   */
  receivedCredit: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (TreasuryCreditReversalCreateBodyMetadata | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryCreditReversalCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryCreditReversalCreateBody = {
  expand?: string[] | undefined;
  metadata?: External$TreasuryCreditReversalCreateBodyMetadata | undefined;
  received_credit: string;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$TreasuryCreditReversalCreateBodyMetadata | undefined)
    | string
    | External$TreasuryCreditReversalCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryCreditReversalCreateBody
 */
const SchemaIn$TreasuryCreditReversalCreateBody: z.ZodType<
  TreasuryCreditReversalCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TreasuryCreditReversalCreateBodyMetadata.in.optional(),
    received_credit: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      received_credit: "receivedCredit",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryCreditReversalCreateBody
 */
const SchemaOut$TreasuryCreditReversalCreateBody: z.ZodType<
  External$TreasuryCreditReversalCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryCreditReversalCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: Schemas$TreasuryCreditReversalCreateBodyMetadata.out.optional(),
    receivedCredit: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      receivedCredit: "received_credit",
    });
  });

export const Schemas$TreasuryCreditReversalCreateBody = {
  in: SchemaIn$TreasuryCreditReversalCreateBody,
  out: SchemaOut$TreasuryCreditReversalCreateBody,
};
