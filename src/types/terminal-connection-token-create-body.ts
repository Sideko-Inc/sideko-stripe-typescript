import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConnectionTokenCreateBody
 */
export type TerminalConnectionTokenCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
   */
  location?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalConnectionTokenCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConnectionTokenCreateBody = {
  expand?: string[] | undefined;
  location?: string | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | External$TerminalConnectionTokenCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConnectionTokenCreateBody
 */
const SchemaIn$TerminalConnectionTokenCreateBody: z.ZodType<
  TerminalConnectionTokenCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    location: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      location: "location",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConnectionTokenCreateBody
 */
const SchemaOut$TerminalConnectionTokenCreateBody: z.ZodType<
  External$TerminalConnectionTokenCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalConnectionTokenCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    location: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      location: "location",
    });
  });

export const Schemas$TerminalConnectionTokenCreateBody = {
  in: SchemaIn$TerminalConnectionTokenCreateBody,
  out: SchemaOut$TerminalConnectionTokenCreateBody,
};
