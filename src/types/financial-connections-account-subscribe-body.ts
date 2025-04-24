import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialConnectionsAccountSubscribeBody
 */
export type FinancialConnectionsAccountSubscribeBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The list of account features to which you would like to subscribe.
   */
  features: "transactions"[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | "transactions"[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * FinancialConnectionsAccountSubscribeBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountSubscribeBody = {
  expand?: string[] | undefined;
  features: "transactions"[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | "transactions"[]
    | External$FinancialConnectionsAccountSubscribeBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountSubscribeBody
 */
const SchemaIn$FinancialConnectionsAccountSubscribeBody: z.ZodType<
  FinancialConnectionsAccountSubscribeBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["transactions"])),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountSubscribeBody
 */
const SchemaOut$FinancialConnectionsAccountSubscribeBody: z.ZodType<
  External$FinancialConnectionsAccountSubscribeBody, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountSubscribeBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    features: z.array(z.enum(["transactions"])),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      features: "features",
    });
  });

export const Schemas$FinancialConnectionsAccountSubscribeBody = {
  in: SchemaIn$FinancialConnectionsAccountSubscribeBody,
  out: SchemaOut$FinancialConnectionsAccountSubscribeBody,
};
