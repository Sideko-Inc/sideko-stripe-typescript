import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type SetupIntentMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SetupIntentMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentMetadata = {
  [additionalProperty: string]:
    | (External$SetupIntentMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentMetadata
 */
const SchemaIn$SetupIntentMetadata: z.ZodType<
  SetupIntentMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentMetadata
 */
const SchemaOut$SetupIntentMetadata: z.ZodType<
  External$SetupIntentMetadata, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SetupIntentMetadata = {
  in: SchemaIn$SetupIntentMetadata,
  out: SchemaOut$SetupIntentMetadata,
};
