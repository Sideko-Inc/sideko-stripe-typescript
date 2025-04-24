import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesBankTransferPayments
 */
export type AccountCreateBodyCapabilitiesBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesBankTransferPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesBankTransferPayments: z.ZodType<
  AccountCreateBodyCapabilitiesBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesBankTransferPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesBankTransferPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesBankTransferPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesBankTransferPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesBankTransferPayments,
};
