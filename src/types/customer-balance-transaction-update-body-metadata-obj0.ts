import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBalanceTransactionUpdateBodyMetadataObj0
 */
export type CustomerBalanceTransactionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerBalanceTransactionUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceTransactionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerBalanceTransactionUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceTransactionUpdateBodyMetadataObj0
 */
const SchemaIn$CustomerBalanceTransactionUpdateBodyMetadataObj0: z.ZodType<
  CustomerBalanceTransactionUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceTransactionUpdateBodyMetadataObj0
 */
const SchemaOut$CustomerBalanceTransactionUpdateBodyMetadataObj0: z.ZodType<
  External$CustomerBalanceTransactionUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceTransactionUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerBalanceTransactionUpdateBodyMetadataObj0 = {
  in: SchemaIn$CustomerBalanceTransactionUpdateBodyMetadataObj0,
  out: SchemaOut$CustomerBalanceTransactionUpdateBodyMetadataObj0,
};
