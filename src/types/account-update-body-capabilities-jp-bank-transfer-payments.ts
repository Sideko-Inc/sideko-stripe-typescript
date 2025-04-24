import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesJpBankTransferPayments
 */
export type AccountUpdateBodyCapabilitiesJpBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesJpBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesJpBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesJpBankTransferPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesJpBankTransferPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesJpBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesJpBankTransferPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesJpBankTransferPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesJpBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesJpBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesJpBankTransferPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesJpBankTransferPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesJpBankTransferPayments,
};
