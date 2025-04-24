import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesSepaBankTransferPayments
 */
export type AccountCreateBodyCapabilitiesSepaBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesSepaBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesSepaBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesSepaBankTransferPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesSepaBankTransferPayments: z.ZodType<
  AccountCreateBodyCapabilitiesSepaBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesSepaBankTransferPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesSepaBankTransferPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesSepaBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesSepaBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesSepaBankTransferPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesSepaBankTransferPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesSepaBankTransferPayments,
};
