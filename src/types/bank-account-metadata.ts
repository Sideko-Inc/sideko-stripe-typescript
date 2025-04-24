import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type BankAccountMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * BankAccountMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankAccountMetadata = {
  [additionalProperty: string]:
    | (External$BankAccountMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankAccountMetadata
 */
const SchemaIn$BankAccountMetadata: z.ZodType<
  BankAccountMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankAccountMetadata
 */
const SchemaOut$BankAccountMetadata: z.ZodType<
  External$BankAccountMetadata, // output type of this zod object
  z.ZodTypeDef,
  BankAccountMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BankAccountMetadata = {
  in: SchemaIn$BankAccountMetadata,
  out: SchemaOut$BankAccountMetadata,
};
