import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountUpdateBodyMetadataObj0
 */
export type CustomerBankAccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerBankAccountUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerBankAccountUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountUpdateBodyMetadataObj0
 */
const SchemaIn$CustomerBankAccountUpdateBodyMetadataObj0: z.ZodType<
  CustomerBankAccountUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountUpdateBodyMetadataObj0
 */
const SchemaOut$CustomerBankAccountUpdateBodyMetadataObj0: z.ZodType<
  External$CustomerBankAccountUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerBankAccountUpdateBodyMetadataObj0 = {
  in: SchemaIn$CustomerBankAccountUpdateBodyMetadataObj0,
  out: SchemaOut$CustomerBankAccountUpdateBodyMetadataObj0,
};
