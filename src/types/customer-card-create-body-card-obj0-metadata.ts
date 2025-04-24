import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCardCreateBodyCardObj0Metadata
 */
export type CustomerCardCreateBodyCardObj0Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerCardCreateBodyCardObj0Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCardCreateBodyCardObj0Metadata = {
  [additionalProperty: string]:
    | External$CustomerCardCreateBodyCardObj0Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCardCreateBodyCardObj0Metadata
 */
const SchemaIn$CustomerCardCreateBodyCardObj0Metadata: z.ZodType<
  CustomerCardCreateBodyCardObj0Metadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCardCreateBodyCardObj0Metadata
 */
const SchemaOut$CustomerCardCreateBodyCardObj0Metadata: z.ZodType<
  External$CustomerCardCreateBodyCardObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  CustomerCardCreateBodyCardObj0Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerCardCreateBodyCardObj0Metadata = {
  in: SchemaIn$CustomerCardCreateBodyCardObj0Metadata,
  out: SchemaOut$CustomerCardCreateBodyCardObj0Metadata,
};
