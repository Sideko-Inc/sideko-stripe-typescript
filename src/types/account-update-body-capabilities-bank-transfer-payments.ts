import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesBankTransferPayments
 */
export type AccountUpdateBodyCapabilitiesBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesBankTransferPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesBankTransferPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesBankTransferPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesBankTransferPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesBankTransferPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesBankTransferPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesBankTransferPayments,
};
