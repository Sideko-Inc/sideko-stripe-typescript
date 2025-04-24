import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesAfterpayClearpayPayments
 */
export type AccountUpdateBodyCapabilitiesAfterpayClearpayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesAfterpayClearpayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesAfterpayClearpayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesAfterpayClearpayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesAfterpayClearpayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesAfterpayClearpayPayments,
};
