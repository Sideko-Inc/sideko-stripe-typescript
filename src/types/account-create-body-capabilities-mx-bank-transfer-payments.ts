import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesMxBankTransferPayments
 */
export type AccountCreateBodyCapabilitiesMxBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesMxBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesMxBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesMxBankTransferPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesMxBankTransferPayments: z.ZodType<
  AccountCreateBodyCapabilitiesMxBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesMxBankTransferPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesMxBankTransferPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesMxBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesMxBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesMxBankTransferPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesMxBankTransferPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesMxBankTransferPayments,
};
