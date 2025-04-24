import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBodyCardObj0Metadata
 */
export type CustomerUpdateBodyCardObj0Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyCardObj0Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyCardObj0Metadata = {
  [additionalProperty: string]:
    | External$CustomerUpdateBodyCardObj0Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyCardObj0Metadata
 */
const SchemaIn$CustomerUpdateBodyCardObj0Metadata: z.ZodType<
  CustomerUpdateBodyCardObj0Metadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyCardObj0Metadata
 */
const SchemaOut$CustomerUpdateBodyCardObj0Metadata: z.ZodType<
  External$CustomerUpdateBodyCardObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyCardObj0Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerUpdateBodyCardObj0Metadata = {
  in: SchemaIn$CustomerUpdateBodyCardObj0Metadata,
  out: SchemaOut$CustomerUpdateBodyCardObj0Metadata,
};
