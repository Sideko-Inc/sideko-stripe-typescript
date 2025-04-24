import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesMxBankTransferPayments
 */
export type AccountUpdateBodyCapabilitiesMxBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesMxBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesMxBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesMxBankTransferPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesMxBankTransferPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesMxBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesMxBankTransferPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesMxBankTransferPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesMxBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesMxBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesMxBankTransferPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesMxBankTransferPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesMxBankTransferPayments,
};
