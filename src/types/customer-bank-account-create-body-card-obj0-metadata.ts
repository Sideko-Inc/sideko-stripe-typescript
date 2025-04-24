import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountCreateBodyCardObj0Metadata
 */
export type CustomerBankAccountCreateBodyCardObj0Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerBankAccountCreateBodyCardObj0Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountCreateBodyCardObj0Metadata = {
  [additionalProperty: string]:
    | External$CustomerBankAccountCreateBodyCardObj0Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountCreateBodyCardObj0Metadata
 */
const SchemaIn$CustomerBankAccountCreateBodyCardObj0Metadata: z.ZodType<
  CustomerBankAccountCreateBodyCardObj0Metadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountCreateBodyCardObj0Metadata
 */
const SchemaOut$CustomerBankAccountCreateBodyCardObj0Metadata: z.ZodType<
  External$CustomerBankAccountCreateBodyCardObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountCreateBodyCardObj0Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerBankAccountCreateBodyCardObj0Metadata = {
  in: SchemaIn$CustomerBankAccountCreateBodyCardObj0Metadata,
  out: SchemaOut$CustomerBankAccountCreateBodyCardObj0Metadata,
};
