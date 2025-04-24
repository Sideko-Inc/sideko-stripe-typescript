import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialConnectionsAccountRefreshBody
 */
export type FinancialConnectionsAccountRefreshBody = {
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
 * FinancialConnectionsAccountRefreshBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountRefreshBody = {
  expand?: string[] | undefined;
  features: ("balance" | "ownership" | "transactions")[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | ("balance" | "ownership" | "transactions")[]
    | External$FinancialConnectionsAccountRefreshBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountRefreshBody
 */
const SchemaIn$FinancialConnectionsAccountRefreshBody: z.ZodType<
  FinancialConnectionsAccountRefreshBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountRefreshBody
 */
const SchemaOut$FinancialConnectionsAccountRefreshBody: z.ZodType<
  External$FinancialConnectionsAccountRefreshBody, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountRefreshBody // the object to be transformed
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

export const Schemas$FinancialConnectionsAccountRefreshBody = {
  in: SchemaIn$FinancialConnectionsAccountRefreshBody,
  out: SchemaOut$FinancialConnectionsAccountRefreshBody,
};
