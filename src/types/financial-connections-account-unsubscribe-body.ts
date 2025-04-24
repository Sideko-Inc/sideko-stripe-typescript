import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialConnectionsAccountUnsubscribeBody
 */
export type FinancialConnectionsAccountUnsubscribeBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The list of account features from which you would like to unsubscribe.
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
 * FinancialConnectionsAccountUnsubscribeBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountUnsubscribeBody = {
  expand?: string[] | undefined;
  features: "transactions"[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | "transactions"[]
    | External$FinancialConnectionsAccountUnsubscribeBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountUnsubscribeBody
 */
const SchemaIn$FinancialConnectionsAccountUnsubscribeBody: z.ZodType<
  FinancialConnectionsAccountUnsubscribeBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountUnsubscribeBody
 */
const SchemaOut$FinancialConnectionsAccountUnsubscribeBody: z.ZodType<
  External$FinancialConnectionsAccountUnsubscribeBody, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountUnsubscribeBody // the object to be transformed
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

export const Schemas$FinancialConnectionsAccountUnsubscribeBody = {
  in: SchemaIn$FinancialConnectionsAccountUnsubscribeBody,
  out: SchemaOut$FinancialConnectionsAccountUnsubscribeBody,
};
