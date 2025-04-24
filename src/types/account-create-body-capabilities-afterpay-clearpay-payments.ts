import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesAfterpayClearpayPayments
 */
export type AccountCreateBodyCapabilitiesAfterpayClearpayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesAfterpayClearpayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesAfterpayClearpayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesAfterpayClearpayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesAfterpayClearpayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesAfterpayClearpayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesAfterpayClearpayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesAfterpayClearpayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesAfterpayClearpayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesAfterpayClearpayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesAfterpayClearpayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesAfterpayClearpayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesAfterpayClearpayPayments,
};
