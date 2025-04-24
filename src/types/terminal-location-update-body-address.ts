import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
 */
export type TerminalLocationUpdateBodyAddress = {
  city?: string | undefined;
  country?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  postalCode?: string | undefined;
  state?: string | undefined;
};

/**
 * @internal
 * TerminalLocationUpdateBodyAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocationUpdateBodyAddress = {
  city?: string | undefined;
  country?: string | undefined;
  line1?: string | undefined;
  line2?: string | undefined;
  postal_code?: string | undefined;
  state?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocationUpdateBodyAddress
 */
const SchemaIn$TerminalLocationUpdateBodyAddress: z.ZodType<
  TerminalLocationUpdateBodyAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.string().optional(),
    country: z.string().optional(),
    line1: z.string().optional(),
    line2: z.string().optional(),
    postal_code: z.string().optional(),
    state: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postal_code: "postalCode",
      state: "state",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocationUpdateBodyAddress
 */
const SchemaOut$TerminalLocationUpdateBodyAddress: z.ZodType<
  External$TerminalLocationUpdateBodyAddress, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocationUpdateBodyAddress // the object to be transformed
> = z
  .object({
    city: z.string().optional(),
    country: z.string().optional(),
    line1: z.string().optional(),
    line2: z.string().optional(),
    postalCode: z.string().optional(),
    state: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      line1: "line1",
      line2: "line2",
      postalCode: "postal_code",
      state: "state",
    });
  });

export const Schemas$TerminalLocationUpdateBodyAddress = {
  in: SchemaIn$TerminalLocationUpdateBodyAddress,
  out: SchemaOut$TerminalLocationUpdateBodyAddress,
};
