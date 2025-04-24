import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSourceCreateBodyCardObj0Metadata
 */
export type CustomerSourceCreateBodyCardObj0Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerSourceCreateBodyCardObj0Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSourceCreateBodyCardObj0Metadata = {
  [additionalProperty: string]:
    | External$CustomerSourceCreateBodyCardObj0Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSourceCreateBodyCardObj0Metadata
 */
const SchemaIn$CustomerSourceCreateBodyCardObj0Metadata: z.ZodType<
  CustomerSourceCreateBodyCardObj0Metadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSourceCreateBodyCardObj0Metadata
 */
const SchemaOut$CustomerSourceCreateBodyCardObj0Metadata: z.ZodType<
  External$CustomerSourceCreateBodyCardObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  CustomerSourceCreateBodyCardObj0Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerSourceCreateBodyCardObj0Metadata = {
  in: SchemaIn$CustomerSourceCreateBodyCardObj0Metadata,
  out: SchemaOut$CustomerSourceCreateBodyCardObj0Metadata,
};
