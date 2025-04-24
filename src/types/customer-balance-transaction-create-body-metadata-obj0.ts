import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBalanceTransactionCreateBodyMetadataObj0
 */
export type CustomerBalanceTransactionCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerBalanceTransactionCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceTransactionCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerBalanceTransactionCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceTransactionCreateBodyMetadataObj0
 */
const SchemaIn$CustomerBalanceTransactionCreateBodyMetadataObj0: z.ZodType<
  CustomerBalanceTransactionCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceTransactionCreateBodyMetadataObj0
 */
const SchemaOut$CustomerBalanceTransactionCreateBodyMetadataObj0: z.ZodType<
  External$CustomerBalanceTransactionCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceTransactionCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerBalanceTransactionCreateBodyMetadataObj0 = {
  in: SchemaIn$CustomerBalanceTransactionCreateBodyMetadataObj0,
  out: SchemaOut$CustomerBalanceTransactionCreateBodyMetadataObj0,
};
