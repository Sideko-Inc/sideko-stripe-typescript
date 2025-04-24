import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesJpBankTransferPayments
 */
export type AccountCreateBodyCapabilitiesJpBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesJpBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesJpBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesJpBankTransferPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesJpBankTransferPayments: z.ZodType<
  AccountCreateBodyCapabilitiesJpBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesJpBankTransferPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesJpBankTransferPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesJpBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesJpBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesJpBankTransferPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesJpBankTransferPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesJpBankTransferPayments,
};
