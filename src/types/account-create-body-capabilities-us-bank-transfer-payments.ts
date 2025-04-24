import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesUsBankTransferPayments
 */
export type AccountCreateBodyCapabilitiesUsBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesUsBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesUsBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesUsBankTransferPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesUsBankTransferPayments: z.ZodType<
  AccountCreateBodyCapabilitiesUsBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesUsBankTransferPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesUsBankTransferPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesUsBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesUsBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesUsBankTransferPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesUsBankTransferPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesUsBankTransferPayments,
};
