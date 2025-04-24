import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type TreasuryCreditReversalMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TreasuryCreditReversalMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryCreditReversalMetadata = {
  [additionalProperty: string]:
    | External$TreasuryCreditReversalMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryCreditReversalMetadata
 */
const SchemaIn$TreasuryCreditReversalMetadata: z.ZodType<
  TreasuryCreditReversalMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryCreditReversalMetadata
 */
const SchemaOut$TreasuryCreditReversalMetadata: z.ZodType<
  External$TreasuryCreditReversalMetadata, // output type of this zod object
  z.ZodTypeDef,
  TreasuryCreditReversalMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TreasuryCreditReversalMetadata = {
  in: SchemaIn$TreasuryCreditReversalMetadata,
  out: SchemaOut$TreasuryCreditReversalMetadata,
};
