import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesSepaBankTransferPayments
 */
export type AccountUpdateBodyCapabilitiesSepaBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesSepaBankTransferPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesSepaBankTransferPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesSepaBankTransferPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesSepaBankTransferPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesSepaBankTransferPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesSepaBankTransferPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesSepaBankTransferPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesSepaBankTransferPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesSepaBankTransferPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesSepaBankTransferPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesSepaBankTransferPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesSepaBankTransferPayments,
};
