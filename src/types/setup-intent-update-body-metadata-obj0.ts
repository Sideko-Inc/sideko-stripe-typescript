import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyMetadataObj0
 */
export type SetupIntentUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$SetupIntentUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyMetadataObj0
 */
const SchemaIn$SetupIntentUpdateBodyMetadataObj0: z.ZodType<
  SetupIntentUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyMetadataObj0
 */
const SchemaOut$SetupIntentUpdateBodyMetadataObj0: z.ZodType<
  External$SetupIntentUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SetupIntentUpdateBodyMetadataObj0 = {
  in: SchemaIn$SetupIntentUpdateBodyMetadataObj0,
  out: SchemaOut$SetupIntentUpdateBodyMetadataObj0,
};
