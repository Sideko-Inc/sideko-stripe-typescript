import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountBankAccountUpdateBodyMetadataObj0
 */
export type AccountBankAccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountBankAccountUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBankAccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountBankAccountUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBankAccountUpdateBodyMetadataObj0
 */
const SchemaIn$AccountBankAccountUpdateBodyMetadataObj0: z.ZodType<
  AccountBankAccountUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBankAccountUpdateBodyMetadataObj0
 */
const SchemaOut$AccountBankAccountUpdateBodyMetadataObj0: z.ZodType<
  External$AccountBankAccountUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountBankAccountUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountBankAccountUpdateBodyMetadataObj0 = {
  in: SchemaIn$AccountBankAccountUpdateBodyMetadataObj0,
  out: SchemaOut$AccountBankAccountUpdateBodyMetadataObj0,
};
