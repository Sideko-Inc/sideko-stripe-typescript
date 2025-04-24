import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingTokenUpdateBody
 */
export type IssuingTokenUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Specifies which status the token should be updated to.
   */
  status: "active" | "deleted" | "suspended";

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ("active" | "deleted" | "suspended")
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingTokenUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTokenUpdateBody = {
  expand?: string[] | undefined;
  status: "active" | "deleted" | "suspended";

  [additionalProperty: string]:
    | (string[] | undefined)
    | ("active" | "deleted" | "suspended")
    | External$IssuingTokenUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTokenUpdateBody
 */
const SchemaIn$IssuingTokenUpdateBody: z.ZodType<
  IssuingTokenUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    status: z.enum(["active", "deleted", "suspended"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTokenUpdateBody
 */
const SchemaOut$IssuingTokenUpdateBody: z.ZodType<
  External$IssuingTokenUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingTokenUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    status: z.enum(["active", "deleted", "suspended"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      status: "status",
    });
  });

export const Schemas$IssuingTokenUpdateBody = {
  in: SchemaIn$IssuingTokenUpdateBody,
  out: SchemaOut$IssuingTokenUpdateBody,
};
