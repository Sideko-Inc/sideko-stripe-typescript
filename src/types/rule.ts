import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type Rule = {
  /**
   * The action taken on the payment.
   */
  action: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The predicate to evaluate the payment against.
   */
  predicate: string;
};

/**
 * @internal
 * Rule without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Rule = {
  action: string;
  id: string;
  predicate: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Rule
 */
const SchemaIn$Rule: z.ZodType<
  Rule, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    action: z.string(),
    id: z.string(),
    predicate: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      id: "id",
      predicate: "predicate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Rule
 */
const SchemaOut$Rule: z.ZodType<
  External$Rule, // output type of this zod object
  z.ZodTypeDef,
  Rule // the object to be transformed
> = z
  .object({
    action: z.string(),
    id: z.string(),
    predicate: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      id: "id",
      predicate: "predicate",
    });
  });

export const Schemas$Rule = {
  in: SchemaIn$Rule,
  out: SchemaOut$Rule,
};
