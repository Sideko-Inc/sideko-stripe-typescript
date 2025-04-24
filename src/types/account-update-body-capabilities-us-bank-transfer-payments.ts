import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesUsBankTransferPayments
 */
export type AccountUpdateBodyCapabilitiesUsBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesUsBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesUsBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesUsBankTransferPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesUsBankTransferPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesUsBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesUsBankTransferPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesUsBankTransferPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesUsBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesUsBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesUsBankTransferPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesUsBankTransferPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesUsBankTransferPayments,
};
