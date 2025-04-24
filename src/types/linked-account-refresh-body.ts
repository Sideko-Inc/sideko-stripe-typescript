import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * LinkedAccountRefreshBody
 */
export type LinkedAccountRefreshBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The list of account features that you would like to refresh.
   */
  features: ("balance" | "ownership" | "transactions")[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ("balance" | "ownership" | "transactions")[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * LinkedAccountRefreshBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinkedAccountRefreshBody = {
  expand?: string[] | undefined;
  features: ("balance" | "ownership" | "transactions")[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | ("balance" | "ownership" | "transactions")[]
    | External$LinkedAccountRefreshBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinkedAccountRefreshBody
 */
const SchemaIn$LinkedAccountRefreshBody: z.ZodType<
  LinkedAccountRefreshBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["balance", "ownership", "transactions"])),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinkedAccountRefreshBody
 */
const SchemaOut$LinkedAccountRefreshBody: z.ZodType<
  External$LinkedAccountRefreshBody, // output type of this zod object
  z.ZodTypeDef,
  LinkedAccountRefreshBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["balance", "ownership", "transactions"])),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
    });
  });

export const Schemas$LinkedAccountRefreshBody = {
  in: SchemaIn$LinkedAccountRefreshBody,
  out: SchemaOut$LinkedAccountRefreshBody,
};
