import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesGbBankTransferPayments
 */
export type AccountUpdateBodyCapabilitiesGbBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesGbBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesGbBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesGbBankTransferPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesGbBankTransferPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesGbBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesGbBankTransferPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesGbBankTransferPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesGbBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesGbBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesGbBankTransferPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesGbBankTransferPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesGbBankTransferPayments,
};
